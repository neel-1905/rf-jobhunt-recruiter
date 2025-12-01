import { UseFormReturn, FieldValues, Path } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormMessage,
  FormControl,
  FormLabel,
} from "@/shared/components/ui/form";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { cn } from "@/shared/lib/utils";

interface FormCheckboxInputProps<TFieldValues extends FieldValues = FieldValues>
  extends Omit<React.ComponentPropsWithoutRef<typeof Checkbox>, "form"> {
  label: string;
  name: Path<TFieldValues>;
  form: UseFormReturn<TFieldValues>;
  containerClassName?: string;
  description?: string;
}

function FormCheckboxInput<TFieldValues extends FieldValues = FieldValues>({
  label,
  name,
  form,
  containerClassName,
  description,
  ...props
}: FormCheckboxInputProps<TFieldValues>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex items-center gap-3", containerClassName)}>
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              {...props}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel className="text-xsm font-normal cursor-pointer">
              {label}
            </FormLabel>
            {description && (
              <p className="text-3xs text-muted-foreground">{description}</p>
            )}
          </div>
          <FormMessage className="text-xs mt-1" />
        </FormItem>
      )}
    />
  );
}

export default FormCheckboxInput;

