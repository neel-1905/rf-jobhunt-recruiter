import { createContext, CSSProperties, useContext } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedValue: string | null;
  setSelectedValue: (value: string | null) => void;
  name: string;
  refs: any;
  floatingStyles: CSSProperties;
  value?: string | null;
  inputValue: string;
  setInputValue: (value: string) => void;
  options: SelectOption[];
  getReferenceProps: () => any;
  getFloatingProps: () => any;
}

const SelectContext = createContext<SelectContextType | null>(null);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Select components must be used within Select.Root");
  }
  return context;
};

export default SelectContext;
