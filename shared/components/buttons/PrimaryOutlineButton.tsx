import { cn } from "@/shared/lib/utils";

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

export default PrimaryOutlineButton;
