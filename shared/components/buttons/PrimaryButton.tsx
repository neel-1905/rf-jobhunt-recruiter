import { cn } from "@/shared/lib/utils";
import { Activity } from "react";
import { LoadingFeedback } from "../feedback";

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
          <LoadingFeedback />
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
