import { cn } from "@/shared/lib/utils";
import React from "react";

const DashboardIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4.5", props.className)}
      {...props}
    >
      <rect
        x="2"
        y="2"
        width="5.05297"
        height="5.05256"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <rect
        x="8.94775"
        y="2"
        width="5.05297"
        height="5.05256"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <rect
        x="2"
        y="8.94727"
        width="5.05297"
        height="5.05256"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <rect
        x="8.94775"
        y="8.94727"
        width="5.05297"
        height="5.05256"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DashboardIcon;
