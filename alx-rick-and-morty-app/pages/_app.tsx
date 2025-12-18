pages/_app.tsx

import type { AppProps } from "next/app";
import ErrorBoundary from "@/components/ErrorBoundary";

import ErrorBoundary from "@/components/ErrorBoundary";
import "@/styles/globals.css"; // Assuming you have global styles
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // The ErrorBoundary now sits at the top level of the React tree
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;


npm run dev

ready - started server on http://localhost:3000

Open:

http://localhost:3000
