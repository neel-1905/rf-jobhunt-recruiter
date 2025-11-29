// SelectLabel.tsx
import { cn } from "@/shared/lib/utils";
import { useSelectContext } from "./SelectContext";

interface SelectLabelProps {
  children: React.ReactNode;
  className?: string;
}

const SelectLabel = ({ children, className }: SelectLabelProps) => {
  const { name } = useSelectContext();

  return (
    <label
      htmlFor={name}
      className={cn(
        "absolute left-3.5 top-4 text-xsm text-muted-foreground font-normal",
        "transition-all duration-200 ease-out origin-left pointer-events-none",
        "peer-placeholder-shown:top-4 peer-placeholder-shown:text-xsm peer-placeholder-shown:text-foreground",
        "peer-focus:top-2 peer-focus:text-3xs peer-focus:text-muted-foreground",
        "peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-3xs",
        className
      )}
    >
      {children}
    </label>
  );
};

export default SelectLabel;
