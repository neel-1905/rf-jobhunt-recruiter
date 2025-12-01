import { cn } from "../lib/utils";

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", props.className)}
      {...props}
    >
      <path
        d="M2.7959 3.61409L5.65219 3.90493"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.79612 3.6128L3.00611 0.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4962 10.5496H7.67285V5.01172"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 8.8963C0.75 13.2272 4.27345 16.7506 8.60435 16.7506C12.9353 16.7506 16.4596 13.2272 16.4596 8.8963C16.4596 4.56539 12.9353 1.04102 8.60435 1.04102C6.35016 1.04102 4.31433 1.99621 2.88061 3.52285"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ClockIcon;
