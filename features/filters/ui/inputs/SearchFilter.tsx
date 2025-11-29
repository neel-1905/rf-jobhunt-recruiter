import { SearchIcons } from "@/shared/icons";
import { cn } from "@/shared/lib/utils";

type SearchFilterProps = {
  value: string;
  className?: string;
  inputClassName?: string;
  placeholder?: string;
};

const SearchFilter = (props: SearchFilterProps) => {
  const { value, className, inputClassName, placeholder } = props;
  return (
    <div
      className={cn(
        "flex items-center border rounded-primary gap-2 px-3 py-2.5",
        className
      )}
    >
      <SearchIcons />
      <input
        type="text"
        placeholder={placeholder}
        onChange={() => {}}
        value={value}
        className={cn("border-none outline-0 text-xs w-full", inputClassName)}
      />
    </div>
  );
};

export default SearchFilter;
