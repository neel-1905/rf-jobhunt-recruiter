import FilterButton from "./FilterButton";
import { FilterIcon } from "@/shared/icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import FiltersRenderer from "./FiltersRenderer";
import { FilterConfig } from "../domain/filter.types";

type FiltersSidebarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  filters: FilterConfig[];
};

const FiltersSidebar = ({
  isOpen,
  setIsOpen,
  filters,
}: FiltersSidebarProps) => {
  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <FilterButton label="Filter" icon={<FilterIcon />} />
        </SheetTrigger>
        <SheetContent side="right" className="py-10 px-7.5 gap-6">
          <SheetHeader className="p-0">
            <SheetTitle className="text-[22px] font-medium">Filters</SheetTitle>
          </SheetHeader>

          <FiltersRenderer filters={filters} />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default FiltersSidebar;
