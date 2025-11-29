"use client";

import FilterButton from "@/features/filters/ui/FilterButton";
import FiltersSidebar from "@/features/filters/ui/FiltersSidebar";
import SearchFilter from "@/features/filters/ui/inputs/SearchFilter";
import { SortIcon, ExportIcon } from "@/shared/icons";
import { useState } from "react";

const DataTableFiltersBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex-center flex-wrap gap-5 w-full">
      <SearchFilter
        value=""
        className="flex-1"
        placeholder="Search by Job Title, Recruiter, Department, Location"
      />
      <div className="flex-center gap-3">
        <FiltersSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <FilterButton label="Sort" icon={<SortIcon />} />
        <FilterButton label="Export" icon={<ExportIcon />} />
      </div>
    </div>
  );
};

export default DataTableFiltersBar;
