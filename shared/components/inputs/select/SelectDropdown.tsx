// SelectDropdown.tsx
import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";
import { useSelectContext } from "./SelectContext";

interface SelectDropdownProps {
  children: ReactNode;
  className?: string;
}

const SelectDropdown = ({ children, className }: SelectDropdownProps) => {
  const { isOpen, refs, floatingStyles } = useSelectContext();

  if (!isOpen) return null;

  return (
    <div
      ref={refs.setFloating}
      style={floatingStyles}
      className={cn(
        "absolute z-50 w-full mt-1 bg-input-background border",
        "rounded-primary shadow-lg max-h-60 overflow-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SelectDropdown;
