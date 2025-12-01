// SelectInput.tsx
import { Activity } from "react";
import { cn } from "@/shared/lib/utils";
import { useSelectContext } from "./SelectContext";
import { ICONS } from "@/shared/constants/icons";

interface SelectInputProps {
  className?: string;
  label?: string;
  onSearch?: (value: string) => void;
  placeholder?: string;
}

const SelectInput = ({
  className,
  label,
  onSearch,
  placeholder = " ",
}: SelectInputProps) => {
  const { name, setIsOpen, isOpen, setInputValue, inputValue } =
    useSelectContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch?.(value);
    if (value) {
      setIsOpen(true);
    }
  };

  const handleChevronClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-full w-full">
      <input
        id={name}
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        className={cn(
          "peer block w-full h-full rounded-primary px-3.5 pt-5 pb-1.5",
          "bg-transparent border-none appearance-none",
          "focus:outline-none focus:ring-0 leading-tight",
          "text-xsm",
          { "pt-1.5": !label },
          className
        )}
      />

      <Activity mode={label ? "visible" : "hidden"}>
        <label
          htmlFor={name}
          className={`
              absolute left-3.5 top-4 text-xsm text-muted-foreground font-normal
              transition-all duration-200 ease-out origin-left
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-xsm peer-placeholder-shown:text-foreground
              peer-focus:top-2 peer-focus:text-3xs peer-focus:text-muted-foreground
              peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-3xs
            `}
        >
          {label}
        </label>
      </Activity>

      <button
        type="button"
        onClick={handleChevronClick}
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
      >
        <img
          src={ICONS.chevronDown}
          alt="arrow down"
          className={cn(
            "h-3 w-3 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
    </div>
  );
};

export default SelectInput;
