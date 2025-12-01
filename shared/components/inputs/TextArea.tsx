import { cn } from "@/shared/lib/utils";
import { Activity } from "react";
import { forwardRef } from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  icon?: React.ReactNode;
  containerClassName?: string;
  error?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { label, icon, containerClassName, error, className, id, ...props },
    ref
  ) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div
        className={cn(
          `relative w-full border ${
            error ? "border-destructive" : "border-input"
          } rounded-primary min-h-[120px]`,
          containerClassName
        )}
      >
        <div className="flex h-full">
          <Activity mode={icon ? "visible" : "hidden"}>
            <div className="flex-center pl-3.5 pt-3.5">{icon}</div>
          </Activity>
          <div className="relative h-full w-full">
            <textarea
              ref={ref}
              id={textareaId}
              placeholder=" "
              className={cn(
                `peer block w-full h-full rounded-primary px-3.5 pt-6 pb-1.5`,
                `bg-transparent border-none appearance-none`,
                `focus:outline-none focus:ring-0 leading-tight`,
                `text-xsm resize-y min-h-[120px]`,
                className
              )}
              {...props}
            />
            <label
              htmlFor={textareaId}
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
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
