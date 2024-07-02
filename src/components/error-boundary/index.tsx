import React from "react";
import { ErrorView } from "@views/error";
import { type ErrorBoundaryProps, ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

const fallbackRender: ErrorBoundaryProps["fallbackRender"] = ({ error, resetErrorBoundary }) => (
  <ErrorView
    error={error instanceof Error ? error.message : String(error)}
    reset={resetErrorBoundary}
  />
);

export const ErrorBoundary: React.FC<Pick<ErrorBoundaryProps, "children">> = ({ children }) => (
  <ReactErrorBoundary
    fallbackRender={fallbackRender}
    onError={(...data) => {
      // TODO: integrate with external API
      console.log("Boundary error", ...data);
    }}>
    {/* When the error boundary is used as a react router template */}
    <Outlet />

    {/* When the error boundary is used in regular scenarios like app entry point */}
    {children}
  </ReactErrorBoundary>
);
