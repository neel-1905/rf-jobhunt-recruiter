import { OPTION } from "@/shared/types";
import { createContext, CSSProperties, useContext } from "react";

interface SelectContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedValue: string | null;
  setSelectedValue: (option: OPTION) => void;
  name: string;
  refs: any;
  floatingStyles: CSSProperties;
  value?: string | null;
  inputValue: string;
  setInputValue: (value: string) => void;
  options: OPTION[];
  getReferenceProps: () => any;
  getFloatingProps: () => any;
  clear: () => void;
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
