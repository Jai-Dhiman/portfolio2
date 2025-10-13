import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  showErrorInDev?: boolean;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (import.meta.env.DEV || this.props.showErrorInDev) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  public render() {
    if (this.state.hasError) {
      // In development mode, show error details if requested
      if (this.props.showErrorInDev && import.meta.env.DEV) {
        return (
          <div className="w-full h-full flex items-center justify-center bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <div className="text-center p-6">
              <div className="text-red-600 dark:text-red-400 mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 18.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-sm text-red-600 dark:text-red-400 font-medium">Component Error</p>
              <p className="text-xs text-red-500 dark:text-red-500 mt-1">Check console for details</p>
            </div>
          </div>
        );
      }
      return this.props.fallback || <div />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;