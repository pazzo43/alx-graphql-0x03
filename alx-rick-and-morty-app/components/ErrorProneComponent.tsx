# components/ErrorProneComponent.tsx
import React from 'react';

const ErrorProneComponent: React.FC = () => {
  // This will force the React rendering phase to fail
  throw new Error('This is a test error!');
};

export default ErrorProneComponent;

import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';

const Home: React.FC = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Welcome to the Rick and Morty App</h1>
      <p>The content below is wrapped in an Error Boundary:</p>
      
      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
    </div>
  );
};

export default Home;

npm run dev

ready - started server on http://localhost:3000

Open:

http://localhost:3000
