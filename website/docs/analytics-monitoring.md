# Analytics and Error Monitoring Implementation

This document describes the comprehensive analytics and error monitoring system implemented for the Three Rivers Tech website.

## Overview

The implementation includes:
- **Google Analytics 4 (GA4)** integration with custom event tracking
- **Comprehensive error monitoring** with automatic reporting
- **Performance monitoring** with Core Web Vitals tracking
- **Real-time error alerts** and logging system
- **Development monitoring dashboard** for testing and debugging

## Google Analytics Implementation

### Configuration

1. **Environment Setup**: Add your GA4 Measurement ID to `.env.local`:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

2. **Automatic Initialization**: Analytics are automatically initialized on page load via the `Analytics` component in the root layout.

### Tracked Events

#### Form Events
- `contact_form_submit` - When contact form is submitted
- `contact_form_success` - Successful form submission
- `contact_form_error` - Form submission errors

#### User Interactions
- `phone_click` - Phone number clicks (conversion goal)
- `email_click` - Email address clicks (conversion goal)
- `calendar_booking` - Calendar booking interactions
- `external_link_click` - External link clicks

#### Performance Events
- `core_web_vitals` - LCP, FID, CLS, TTFB, FCP metrics
- `javascript_error` - JavaScript errors
- `api_error` - API request failures

### Conversion Goals

The following conversion goals are automatically tracked:
- Contact form submissions
- Phone call clicks
- Email contact clicks
- Calendar bookings

### Usage in Components

```typescript
import { useAnalytics } from '@/components/Analytics';

function MyComponent() {
  const analytics = useAnalytics();
  
  const handleButtonClick = () => {
    analytics.trackEvent({
      action: 'button_click',
      category: 'user_interaction',
      label: 'cta_button',
      value: 1
    });
  };
  
  return <button onClick={handleButtonClick}>Click Me</button>;
}
```

## Error Monitoring System

### Features

1. **Automatic Error Capture**:
   - Unhandled JavaScript errors
   - Unhandled promise rejections
   - Resource loading failures
   - API request failures
   - Performance issues

2. **Error Classification**:
   - **Type**: JavaScript, API, Network, Resource, Performance
   - **Severity**: Low, Medium, High, Critical
   - **Context**: URL, user agent, timestamp, component info

3. **Rate Limiting**: Prevents error spam with intelligent throttling

4. **Health Monitoring**: Periodic checks for broken links and API health

### Error Reporting API

Errors are automatically sent to `/api/errors` endpoint which:
- Validates and logs error reports
- Implements rate limiting (10 reports per IP per minute)
- Handles critical error alerts
- Provides structured logging for analysis

### Manual Error Reporting

```typescript
import { reportCustomError, ErrorType, ErrorSeverity } from '@/lib/error-monitoring';

// Report a custom error
reportCustomError(
  'Custom error message',
  ErrorType.JAVASCRIPT,
  ErrorSeverity.MEDIUM,
  {
    component: 'my_component',
    action: 'user_action',
    additionalData: { key: 'value' }
  }
);
```

### React Error Boundaries

Use the `ErrorBoundary` component to catch React-specific errors:

```typescript
import ErrorBoundary from '@/components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary componentName="app" fallback={<div>Something went wrong</div>}>
      <MyComponent />
    </ErrorBoundary>
  );
}
```

## Performance Monitoring

### Core Web Vitals

Automatically tracks and reports:
- **LCP** (Largest Contentful Paint)
- **FID** (First Input Delay)
- **CLS** (Cumulative Layout Shift)
- **TTFB** (Time to First Byte)
- **FCP** (First Contentful Paint)

### Performance Issues

Monitors and reports:
- Long tasks (>50ms)
- High memory usage (>90%)
- Slow page loads (>3 seconds)
- JavaScript execution issues

## Development Tools

### Monitoring Dashboard

In development mode, a monitoring dashboard is available that shows:
- Real-time error counts
- Error severity breakdown
- Test buttons for error tracking

To enable in production:
```javascript
localStorage.setItem('show_monitoring_dashboard', 'true');
```

### Testing Error Tracking

The dashboard includes test buttons for:
- JavaScript errors
- API errors
- Network errors
- Custom errors

## Production Setup

### 1. Google Analytics

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Copy your Measurement ID (G-XXXXXXXXXX)
3. Update `NEXT_PUBLIC_GA_MEASUREMENT_ID` in your environment variables
4. Deploy and verify tracking in GA4 Real-time reports

### 2. Error Monitoring Service Integration

For production, consider integrating with external services:

#### Sentry Integration
```env
SENTRY_DSN=your-sentry-dsn-here
```

#### Slack Alerts
```env
SLACK_WEBHOOK_URL=your-slack-webhook-url-here
```

Update the error monitoring code to send critical errors to these services.

### 3. Monitoring and Alerts

Set up monitoring for:
- Error rate thresholds
- Performance degradation
- API health checks
- Critical error notifications

## Privacy and Compliance

### GDPR Compliance

The analytics implementation includes:
- IP anonymization (`anonymize_ip: true`)
- Configurable consent management
- Privacy-friendly settings

### Data Collection

Only collects:
- Anonymous usage statistics
- Error reports (no personal data)
- Performance metrics
- User interaction events

## Troubleshooting

### Common Issues

1. **Analytics not tracking**: Verify `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set correctly
2. **Errors not reporting**: Check browser console for API errors
3. **Performance issues**: Monitor Core Web Vitals in development

### Debug Mode

Enable debug logging:
```javascript
// In browser console
localStorage.setItem('analytics_debug', 'true');
```

### Health Checks

Monitor system health:
- `/api/errors` - Error logging API status
- Browser console - Client-side error reports
- GA4 Real-time - Analytics tracking verification

## Maintenance

### Regular Tasks

1. **Review error reports** weekly for patterns
2. **Monitor performance metrics** for degradation
3. **Update tracking events** as features change
4. **Audit privacy compliance** quarterly

### Updates

When updating the system:
1. Test error tracking in development
2. Verify analytics events are firing
3. Check performance impact
4. Update documentation as needed

## Support

For issues with the analytics and monitoring system:
1. Check browser console for errors
2. Verify environment variables are set
3. Test with the development dashboard
4. Review server logs for API errors