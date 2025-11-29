import { cn } from "@/shared/lib/utils";
import { Activity } from "react";

type PrimaryButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<"button">;

const PrimaryButton = (props: PrimaryButtonProps) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={cn(
        "p-4 text-secondary bg-primary hover:opacity-95 rounded-btn-primary flex-center gap-2.5",
        "font-medium text-xs",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

// Higher-Order Component for PrimaryButton with loading state
type PrimaryButtonWithLoadingProps = PrimaryButtonProps & {
  isLoading?: boolean;
  loadingText?: string;
};

export const PrimaryButtonWithLoading = (
  props: PrimaryButtonWithLoadingProps
) => {
  const {
    isLoading = false,
    loadingText,
    children,
    disabled,
    type = "submit",
    ...rest
  } = props;

  return (
    <PrimaryButton disabled={isLoading || disabled} type={type} {...rest}>
      {isLoading ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <Activity mode={loadingText ? "visible" : "hidden"}>
            <span>{loadingText}</span>
          </Activity>
        </>
      ) : (
        children
      )}
    </PrimaryButton>
  );
};

export default PrimaryButton;
