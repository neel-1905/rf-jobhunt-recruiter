import React from "react";

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      {...props}
    >
      <g opacity="0.87">
        <rect
          x="0.75"
          y="0.75"
          width="16"
          height="12.4444"
          rx="2"
          stroke="black"
          strokeWidth="1.5"
        />
        <path
          d="M2.13477 1.50977L9.22086 6.9707L15.8611 1.50977"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default EmailIcon;
