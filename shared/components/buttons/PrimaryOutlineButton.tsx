import { cn } from "@/shared/lib/utils";
import { LoadingFeedback } from "../feedback";
import { Activity } from "react";

type PrimaryButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<"button">;

const PrimaryOutlineButton = (props: PrimaryButtonProps) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={cn(
        "p-4 text-primary hover:opacity-95 rounded-btn-primary flex-center gap-2.5",
        "font-medium text-xs border border-primary hover:bg-accent",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

type PrimaryOutlineButtonWithLoadingProps = PrimaryButtonProps & {
  isLoading?: boolean;
  loadingText?: string;
};

export const PrimaryOutlineButtonWithLoading = (
  props: PrimaryOutlineButtonWithLoadingProps
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
    <PrimaryOutlineButton
      disabled={isLoading || disabled}
      type={type}
      {...rest}
    >
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
    </PrimaryOutlineButton>
  );
};

export default PrimaryOutlineButton;
