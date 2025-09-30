import { NextRequest, NextResponse } from 'next/server';

// Configure for static export
export const dynamic = 'force-static';

// Rate limiting for error reports
const errorReports = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REPORTS_PER_IP = 10;

export async function POST(request: NextRequest) {
  try {
    const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    // Rate limiting
    const reportCount = errorReports.get(clientIP) || 0;
    
    if (reportCount >= MAX_REPORTS_PER_IP) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      );
    }
    
    errorReports.set(clientIP, reportCount + 1);
    
    // Clean up old entries
    setTimeout(() => {
      errorReports.delete(clientIP);
    }, RATE_LIMIT_WINDOW);

    const errorReport = await request.json();
    
    // Validate error report structure
    if (!errorReport.type || !errorReport.message || !errorReport.context) {
      return NextResponse.json(
        { error: 'Invalid error report format' },
        { status: 400 }
      );
    }

    // Log error to server console with structured format
    console.error('Client Error Report:', {
      timestamp: new Date().toISOString(),
      clientIP,
      userAgent: request.headers.get('user-agent'),
      ...errorReport,
    });

    // In production, you might want to:
    // 1. Send to external monitoring service (Sentry, LogRocket, etc.)
    // 2. Store in database for analysis
    // 3. Send alerts for critical errors
    // 4. Aggregate metrics for dashboards

    // Example: Send critical errors to monitoring service
    if (errorReport.severity === 'critical') {
      await handleCriticalError(errorReport, clientIP);
    }

    return NextResponse.json(
      { message: 'Error report received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing error report:', error);
    return NextResponse.json(
      { error: 'Failed to process error report' },
      { status: 500 }
    );
  }
}

/**
 * Handle critical errors that need immediate attention
 */
async function handleCriticalError(errorReport: {
  message: string;
  context: { url?: string; userAgent?: string; timestamp?: string };
}, clientIP: string) {
  try {
    // Log critical error with more detail
    console.error('CRITICAL ERROR DETECTED:', {
      timestamp: new Date().toISOString(),
      clientIP,
      errorReport,
      severity: 'CRITICAL',
    });

    // In production, you might:
    // 1. Send email alerts to development team
    // 2. Create incident in monitoring system
    // 3. Send to Slack/Discord webhook
    // 4. Store in high-priority error queue

    // Example webhook notification (uncomment and configure in production)
    /*
    if (process.env.SLACK_WEBHOOK_URL) {
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🚨 Critical Error on ${process.env.NEXT_PUBLIC_SITE_URL}`,
          attachments: [{
            color: 'danger',
            fields: [
              { title: 'Error', value: errorReport.message, short: false },
              { title: 'URL', value: errorReport.context.url, short: true },
              { title: 'User Agent', value: errorReport.context.userAgent, short: true },
              { title: 'Timestamp', value: errorReport.context.timestamp, short: true },
            ]
          }]
        })
      });
    }
    */
  } catch (error) {
    console.error('Failed to handle critical error:', error);
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'error-logging'
  });
}
