import { UseFormReturn, FieldValues, Path } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormMessage,
  FormControl,
} from "@/shared/components/ui/form";
import { cn } from "@/shared/lib/utils";
import { Activity } from "react";

interface FormInputProps<TFieldValues extends FieldValues = FieldValues>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "form"> {
  label: string;
  name: Path<TFieldValues>;
  form: UseFormReturn<TFieldValues>;
  icon?: React.ReactNode;
  containerClassName?: string;
  inputClassName?: string;
}

function FormTextInput<TFieldValues extends FieldValues = FieldValues>({
  label,
  name,
  form,
  icon,
  containerClassName,
  inputClassName,
  ...props
}: FormInputProps<TFieldValues>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormControl
            className={cn(
              `relative w-full border ${
                fieldState.error ? "border-destructive" : "border-input"
              } rounded-primary h-[54px]`,
              containerClassName
            )}
          >
            <div className="flex">
              <Activity mode={icon ? "visible" : "hidden"}>
                <div className="flex-center pl-3.5">{icon}</div>
              </Activity>
              <div className="relative h-full w-full">
                <input
                  {...field}
                  {...props}
                  id={name}
                  placeholder=" "
                  className={cn(
                    `
                  peer block w-full h-full rounded-primary px-3.5 pt-5 pb-1.5   
                  bg-transparent border-none appearance-none
                  focus:outline-none focus:ring-0 leading-tight!
                `,
                    `text-xsm`
                  )}
                />
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
              </div>
            </div>
          </FormControl>
          <FormMessage className="text-xs mt-1" />
        </FormItem>
      )}
    />
  );
}

export default FormTextInput;
