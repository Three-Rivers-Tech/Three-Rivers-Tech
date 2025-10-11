"use client";

import { useState, useEffect } from 'react';
import { reportCustomError, ErrorType, ErrorSeverity } from '@/lib/error-monitoring';

interface ErrorSummary {
  totalErrors: number;
  criticalErrors: number;
  apiErrors: number;
  jsErrors: number;
  lastError?: string;
}

/**
 * Monitoring Dashboard component for viewing error statistics
 * This would typically be used in an admin panel or development environment
 */
export default function MonitoringDashboard() {
  const [errorSummary, setErrorSummary] = useState<ErrorSummary>({
    totalErrors: 0,
    criticalErrors: 0,
    apiErrors: 0,
    jsErrors: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const showDashboard = process.env.NODE_ENV === 'development' || 
                         localStorage.getItem('show_monitoring_dashboard') === 'true';
    setIsVisible(showDashboard);

    if (showDashboard) {
      // Simulate error summary (in production, this would come from your monitoring service)
      const summary: ErrorSummary = {
        totalErrors: 0,
        criticalErrors: 0,
        apiErrors: 0,
        jsErrors: 0,
        lastError: undefined,
      };
      setErrorSummary(summary);
    }
  }, []);

  const testError = (type: 'js' | 'api' | 'network' | 'custom') => {
    switch (type) {
      case 'js':
        // Trigger a JavaScript error
        throw new Error('Test JavaScript error from monitoring dashboard');
      
      case 'api':
        // Trigger an API error
        fetch('/api/nonexistent-endpoint')
          .catch(() => {
            // Error will be caught by fetch monitoring
          });
        break;
      
      case 'network':
        // Trigger a network error
        fetch('https://nonexistent-domain-for-testing.com')
          .catch(() => {
            // Error will be caught by fetch monitoring
          });
        break;
      
      case 'custom':
        // Report a custom error
        reportCustomError(
          'Test custom error from monitoring dashboard',
          ErrorType.JAVASCRIPT,
          ErrorSeverity.LOW,
          {
            component: 'monitoring_dashboard',
            action: 'test_error',
          }
        );
        break;
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Error Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300">Total Errors:</span>
          <span className="font-medium text-gray-900 dark:text-white">
            {errorSummary.totalErrors}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300">Critical:</span>
          <span className="font-medium text-red-600 dark:text-red-400">
            {errorSummary.criticalErrors}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300">API Errors:</span>
          <span className="font-medium text-blue-600 dark:text-blue-400">
            {errorSummary.apiErrors}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-300">JS Errors:</span>
          <span className="font-medium text-sky-600 dark:text-sky-400">
            {errorSummary.jsErrors}
          </span>
        </div>
      </div>

      {process.env.NODE_ENV === 'development' && (
        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
            Test Error Tracking:
          </p>
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => testError('js')}
              className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded hover:bg-red-200"
            >
              JS Error
            </button>
            <button
              onClick={() => testError('api')}
              className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
            >
              API Error
            </button>
            <button
              onClick={() => testError('network')}
              className="text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded hover:bg-sky-200"
            >
              Network
            </button>
            <button
              onClick={() => testError('custom')}
              className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded hover:bg-indigo-200"
            >
              Custom
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Toggle monitoring dashboard visibility
 */
export function toggleMonitoringDashboard() {
  const current = localStorage.getItem('show_monitoring_dashboard') === 'true';
  localStorage.setItem('show_monitoring_dashboard', String(!current));
  window.location.reload();
}