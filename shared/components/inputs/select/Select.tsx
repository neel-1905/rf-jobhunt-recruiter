"use client";

// Select.tsx
import { useState, ReactNode, useEffect } from "react";
import {
  autoUpdate,
  flip,
  offset,
  shift,
  size,
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react";
import SelectContext from "./SelectContext";
import SelectTrigger from "./SelectTrigger";
import SelectInput from "./SelectInput";
import SelectLabel from "./SelectLabel";
import SelectIcon from "./SelectIcon";
import SelectDropdown from "./SelectDropdown";
import SelectOption from "./SelectOption";
import { OPTION } from "@/shared/types";

interface SelectRootProps {
  children: ReactNode;
  name: string;
  onValueChange?: (option: OPTION) => void;
  value?: string | null;
  options?: OPTION[];
}

const SelectRoot = ({
  children,
  name,
  onValueChange,
  value,
  options = [],
}: SelectRootProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  const { refs, floatingStyles, context } = useFloating({
    placement: "bottom-start",
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(1),
      flip(),
      shift(),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            minWidth: `${rects.reference.width}px`,
          });
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const handleValueChange = (option: OPTION) => {
    setSelectedValue(option.value);
    onValueChange?.(option);
  };

  // Update selectedValue when value prop changes
  useEffect(() => {
    if (value !== undefined && value !== selectedValue) {
      setSelectedValue(value);
    }
  }, [value]);

  // Update inputValue when selectedValue changes or options change
  useEffect(() => {
    if (selectedValue) {
      const option = options.find((opt) => opt.value === selectedValue);
      if (option) {
        setInputValue(option.label);
      }
    } else {
      setInputValue("");
    }
  }, [selectedValue, options]);

  const clear = () => {
    setSelectedValue(null);
    setInputValue("");
  };

  return (
    <SelectContext.Provider
      value={{
        isOpen,
        setIsOpen,
        selectedValue,
        setSelectedValue: handleValueChange,
        name,
        refs,
        floatingStyles,
        value,
        inputValue,
        setInputValue,
        options,
        getReferenceProps,
        getFloatingProps,
        clear,
      }}
    >
      <div className="relative w-full">{children}</div>
    </SelectContext.Provider>
  );
};

export const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Input: SelectInput,
  Label: SelectLabel,
  Icon: SelectIcon,
  Dropdown: SelectDropdown,
  Option: SelectOption,
};
