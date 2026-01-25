"use client";

import React from "react";
import { FiGithub } from "react-icons/fi";

class GithubCalendarErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center py-16">
          <div className="text-center space-y-2">
            <FiGithub className="mx-auto h-6 w-6 opacity-50" />
            <p className="text-sm font-medium text-foreground">
              Unable to load GitHub activity
            </p>
            <p className="text-xs text-muted-foreground">
              Please try again later.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default GithubCalendarErrorBoundary;
