// SelectTrigger.tsx
import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";
import { useSelectContext } from "./SelectContext";
import { FieldError } from "react-hook-form";

interface SelectTriggerProps {
  children: ReactNode;
  className?: string;
  error?: FieldError;
}

const SelectTrigger = ({ children, className, error }: SelectTriggerProps) => {
  const { refs, getReferenceProps } = useSelectContext();

  return (
    <div
      ref={refs.setReference}
      {...getReferenceProps()}
      className={cn(
        "relative w-full border border-input rounded-primary h-[54px]",
        { "border-destructive": !!error },
        className
      )}
    >
      <div className="flex size-full">{children}</div>
    </div>
  );
};

export default SelectTrigger;
