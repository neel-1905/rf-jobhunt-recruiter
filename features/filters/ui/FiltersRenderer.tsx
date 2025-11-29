import MultiSelectFilter from "./inputs/MultiSelectFilter";
import { FilterConfig } from "../domain/filter.types";

const FiltersRenderer = (props: { filters: FilterConfig[] }) => {
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
                defaultSelected={filter.defaultSelected}
              />
            );
        }
      })}
    </div>
  );
};

export default FiltersRenderer;
