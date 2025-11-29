"use client";
import {
  PrimaryButton,
  PrimaryOutlineButton,
} from "@/shared/components/buttons";
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover";
import { ICONS } from "@/shared/constants/icons";
import { OPTION } from "@/shared/types";
import Image from "next/image";
import { Activity, useEffect, useState } from "react";

type MultiSelectFilterProps = {
  label: string;
  name: string;
  options: OPTION[];
  placeholder?: string;
  defaultSelected?: string[];

  /** ⭐ ADDED — for URL integration */
  selectedValues?: string[];
  onSaveValues?: (values: string[]) => void;
};

const MultiSelectFilter = (props: MultiSelectFilterProps) => {
  const {
    label,
    name,
    options,
    placeholder = "Add an option...",
    defaultSelected,

    /** ⭐ NEW props */
    selectedValues,
    onSaveValues,
  } = props;

  const [query, setQuery] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const [displayOptions, setDisplayOptions] = useState<
    (OPTION & { isChecked: boolean })[]
  >([]);

  const selectedOptions = displayOptions.filter((opt) => opt.isChecked);

  useEffect(() => {
    if (selectedValues === undefined) return;

    // ONLY include selected ones, same as your original component
    const mapped = options
      .filter((opt) => selectedValues.includes(opt.value))
      .map((opt) => ({ ...opt, isChecked: true }));

    setDisplayOptions(mapped);
  }, [selectedValues, options]);

  useEffect(() => {
    if (selectedValues !== undefined) return;

    if (!defaultSelected || defaultSelected.length === 0) {
      setDisplayOptions([]);
      return;
    }

    const preselected = options
      .filter((opt) => defaultSelected.includes(opt.value))
      .map((opt) => ({ ...opt, isChecked: true }));

    setDisplayOptions(preselected);
  }, [options, defaultSelected, selectedValues]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowOptions(e.target.value.trim().length > 0);
  };

  const handleOptionSelect = (option: OPTION) => {
    setDisplayOptions((prev) => {
      const exists = prev.find((o) => o.value === option.value);

      if (exists) {
        return prev.map((o) =>
          o.value === option.value ? { ...o, isChecked: true } : o
        );
      }

      return [...prev, { ...option, isChecked: true }];
    });

    setQuery("");
    setShowOptions(false);
  };

  const handleCheckboxChange = (key: string, checked: boolean) => {
    setDisplayOptions((prev) =>
      prev.map((opt) =>
        opt.value === key ? { ...opt, isChecked: checked } : opt
      )
    );
  };

  const handleClear = () => {
    displayOptions.forEach((opt) => {
      handleCheckboxChange(opt.value, false);
    });

    if (onSaveValues) onSaveValues([]);
  };

  const handleSave = () => {
    console.log("Save", selectedOptions);

    if (onSaveValues) {
      const values = selectedOptions.map((o) => o.value);
      onSaveValues(values);
    }
  };

  return (
    <Popover modal={true}>
      <PopoverTrigger asChild>
        <button className="border border-input rounded-primary flex-between p-5 w-full">
          <div className="text-xsm flex-center">
            <span>{label}</span>

            <Activity mode={selectedOptions.length > 0 ? "visible" : "hidden"}>
              <div className="size-4 rounded-full bg-primary text-background ml-3 mr-1 flex-center text-2xs">
                {selectedOptions.length}
              </div>
              <span className="text-2xs">option(s) selected</span>
            </Activity>
          </div>

          <Image
            src={ICONS.chevronDown}
            alt="arrow down"
            height={12}
            width={12}
          />
        </button>
      </PopoverTrigger>

      <PopoverContent className="max-h-64 p-5 flex flex-col gap-2">
        {/* SEARCH */}
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder}
            className="border border-input rounded-primary outline-none w-full py-2 px-3 text-xs"
            value={query}
            onChange={handleInputChange}
          />

          <Activity mode={showOptions ? "visible" : "hidden"}>
            <div className="absolute top-full mt-1 w-full left-0 border bg-background shadow-md rounded-sm max-h-42 overflow-auto z-10">
              {options.map((option) => (
                <div
                  key={option.value}
                  className="cursor-pointer hover:bg-accent p-2 text-xsm"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </Activity>
        </div>

        {/* OPTIONS */}
        {displayOptions.length > 0 ? (
          <div className="flex flex-col gap-2 px-2 pt-2 flex-1 overflow-auto">
            {displayOptions.map((opt) => (
              <div key={opt.value} className="flex items-center gap-2 p-1">
                <Checkbox
                  id={opt.value}
                  name={name}
                  checked={opt.isChecked}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(opt.value, Boolean(checked))
                  }
                />
                <label htmlFor={opt.value} className="text-xsm">
                  {opt.label}
                </label>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 text-center text-muted-foreground text-sm">
            Search and add options
          </div>
        )}

        {/* FOOTER BUTTONS */}
        <div className="ml-auto flex mt-2 w-max gap-3">
          <PrimaryOutlineButton className="px-4 py-2" onClick={handleClear}>
            Clear
          </PrimaryOutlineButton>

          <PrimaryButton className="px-4 py-2" onClick={handleSave}>
            Save
          </PrimaryButton>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MultiSelectFilter;
