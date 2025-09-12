import type React from "react";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        url?: string;
        events?: string;
        "events-target"?: string;
      };
    }
  }
}
export {};
