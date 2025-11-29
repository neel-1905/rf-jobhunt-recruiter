// SelectOption.tsx
import { cn } from "@/shared/lib/utils";
import { useSelectContext } from "./SelectContext";

interface SelectOptionProps {
  value: string;
  label: string;
  className?: string;
}

const SelectOption = ({ value, label, className }: SelectOptionProps) => {
  const { setSelectedValue, setIsOpen, selectedValue, setInputValue } =
    useSelectContext();

  const handleClick = () => {
    setSelectedValue(value);
    setIsOpen(false);
    setInputValue(label);
  };

  const isSelected = selectedValue === value;

  return (
    <div
      role="button"
      tabIndex={-1}
      onClick={handleClick}
      className={cn(
        "py-2 px-4 hover:bg-primary/10 cursor-pointer text-xs",
        isSelected && "bg-primary/5",
        className
      )}
    >
      {label}
    </div>
  );
};

export default SelectOption;
