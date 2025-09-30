"use client";

import React, { Component, ReactNode } from 'react';
import { createErrorBoundary } from '@/lib/error-monitoring';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  componentName?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary component that catches React errors and reports them
 */
export default class ErrorBoundary extends Component<Props, State> {
  private errorHandler: (error: Error, errorInfo: React.ErrorInfo) => void;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
    this.errorHandler = createErrorBoundary(props.componentName || 'ErrorBoundary');
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Report the error to monitoring
    this.errorHandler(error, errorInfo);

    // Log to console for development
    console.error('React Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-[200px] flex items-center justify-center p-8">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold mb-2 text-foreground">
              Something went wrong
            </h2>
            <p className="text-foreground-secondary mb-4">
              We&apos;re sorry, but something unexpected happened. 
              Our team has been notified and is working on a fix.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: undefined });
                window.location.reload();
              }}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Higher-order component to wrap components with error boundary
 */
export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentName?: string,
  fallback?: ReactNode
) {
  const WithErrorBoundaryComponent = (props: P) => (
    <ErrorBoundary componentName={componentName} fallback={fallback}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );

  WithErrorBoundaryComponent.displayName = `withErrorBoundary(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithErrorBoundaryComponent;
}
