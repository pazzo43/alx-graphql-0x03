npm install @sentry/react @sentry/nextjs

import React, { ReactNode, ErrorInfo } from "react";
import * as Sentry from '@sentry/react'; // Import Sentry

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to the console for local debugging
    console.log({ error, errorInfo });
    
    // Send the error to Sentry for production tracking
    Sentry.captureException(error, { extra: { errorInfo } });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h2>Oops, there is an error!</h2>
          <button 
            onClick={() => this.setState({ hasError: false })}
            style={{ padding: "10px 20px", cursor: "pointer" }}
          >
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;


Sentry.init({
  dsn: "YOUR_SENTRY_DSN_HERE",
  tracesSampleRate: 1.0,
});

Refresh http://localhost:3000 while ErrorProneComponent is still active in your code.

npm run dev

ready - started server on http://localhost:3000

Open:

http://localhost:3000
