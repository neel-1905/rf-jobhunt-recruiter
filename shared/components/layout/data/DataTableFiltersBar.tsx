"use client";

import { FilterConfig } from "@/features/filters/domain/filter.types";
import { useFilters } from "@/features/filters/hooks/useFilters";
import FilterButton from "@/features/filters/ui/FilterButton";
import FiltersSidebar from "@/features/filters/ui/FiltersSidebar";
import SearchInput from "@/features/filters/ui/inputs/SearchInput";
import { SortIcon, ExportIcon } from "@/shared/icons";
import { useState } from "react";

type DataTableFiltersBarProps = {
  filters: FilterConfig[];
};

const DataTableFiltersBar = ({ filters }: DataTableFiltersBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { filters: tableFilters, set } = useFilters({
    search: {
      type: "string",
      default: "",
      debounce: 500, // automatically debounces URL updates
    },
  });
  return (
    <div className="flex-center flex-wrap gap-5 w-full">
      <SearchInput
        value={tableFilters.search}
        onChange={(value) => set.search(value)}
        className="flex-1"
        placeholder="Search by Job Title, Recruiter, Department, Location"
      />
      <div className="flex-center gap-3">
        <FiltersSidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          filters={filters}
        />
        <FilterButton label="Sort" icon={<SortIcon />} />
        <FilterButton label="Export" icon={<ExportIcon />} />
      </div>
    </div>
  );
};

export default DataTableFiltersBar;
