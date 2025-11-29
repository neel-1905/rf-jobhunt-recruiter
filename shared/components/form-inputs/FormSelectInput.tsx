import React from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Select } from "../inputs";
import { OPTION } from "@/shared/types";

type FormSelectInputProps<TFieldValues extends FieldValues = FieldValues> = {
  label: string;
  name: Path<TFieldValues>;
  form: UseFormReturn<TFieldValues>;
  options: OPTION[];
  onSearch?: (query: string) => void;
};

function FormSelectInput<TFieldValues extends FieldValues = FieldValues>(
  props: FormSelectInputProps<TFieldValues>
) {
  const { label, name, form, options, onSearch } = props;

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormControl>
            <Select.Root
              name={name}
              onValueChange={field.onChange}
              options={options}
              value={field.value}
            >
              <Select.Trigger error={fieldState.error}>
                <Select.Input onSearch={onSearch} label={label} />
              </Select.Trigger>

              <Select.Dropdown>
                {options.map((option) => (
                  <Select.Option
                    key={option.value}
                    value={option.value}
                    label={option.label}
                  />
                ))}
              </Select.Dropdown>
            </Select.Root>
          </FormControl>
          <FormMessage className="text-xs mt-1" />
        </FormItem>
      )}
    />
  );
}

export default FormSelectInput;
