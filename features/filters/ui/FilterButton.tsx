import { cn } from "@/shared/lib/utils";
import { Activity } from "react";

type FilterButtonProps = {
  icon?: React.ReactNode;
  label: string;
} & React.ComponentProps<"button">;

const FilterButton = (props: FilterButtonProps) => {
  const { icon, label, disabled, ...rest } = props;
  return (
    <button
      className={cn(
        "py-2.5 px-3 flex-center gap-2.5 border rounded-primary h-9 bg-background",
        {
          "opacity-50 cursor-default": disabled,
        }
      )}
      disabled={disabled}
      {...rest}
    >
      <Activity mode={icon ? "visible" : "hidden"}>{icon}</Activity>
      <span className="text-xsm">{label}</span>
    </button>
  );
};

export default FilterButton;
