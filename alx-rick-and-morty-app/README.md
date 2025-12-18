# alx-graphql-0x03
## Duplicate the Project
alx-graphql-0x02 → alx-graphql-0x03

### Navigate to the App Directory
cd alx-graphql-0x03
cd alx-rick-and-morty-app

#### Create the ErrorBoundary File
mkdir -p components
touch components/ErrorBoundary.tsx

##### Implement the ErrorBoundary Component
import React, { ReactNode, ErrorInfo } from "react";

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

  // Update state so the next render will show the fallback UI.
  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  // You can also log the error to an error reporting service like Sentry
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Custom Fallback UI
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

###### Save and Close Files
Save the file as components/ErrorBoundary.tsx.

###### Run the Development Server
npm run dev

You should see output similar to:
ready - started server on http://localhost:3000

###### View in the Browser
Open your browser and visit:

http://localhost:3000
