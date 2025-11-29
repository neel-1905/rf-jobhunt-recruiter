"use client";

import { useFilters } from "@/features/filters/hooks/useFilters";
import { FilterConfig } from "../domain/filter.types";
import MultiSelectFilter from "./inputs/MultiSelectFilter";

const jobFiltersConfig = {
  status: {
    type: "array",
    default: [],
  },
};

const FiltersRenderer = (props: { filters: FilterConfig[] }) => {
  const { filters: selected, set, toggle } = useFilters(jobFiltersConfig);

  return (
    <div className="flex flex-col gap-5">
      {props.filters.map((filter) => {
        switch (filter.type) {
          case "multi-select":
            return (
              <MultiSelectFilter
                key={filter.name}
                label={filter.label}
                name={filter.name}
                options={filter.options}
                selectedValues={selected[filter.name]} // ← FROM URL
                onSaveValues={(newValues) => set[filter.name](newValues)} // SAVE TO URL
              />
            );
        }
      })}
    </div>
  );
};

export default FiltersRenderer;
