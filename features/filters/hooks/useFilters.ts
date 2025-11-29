"use client";

import {
  useQueryState,
  parseAsString,
  parseAsInteger,
  parseAsArrayOf,
} from "nuqs";

import { useDebounce } from "@/shared/hooks/useDebounce";

export function useFilters<T extends Record<string, any>>(config: T) {
  const filters: any = {};
  const set: any = {};
  const toggle: any = {};

  Object.entries(config).forEach(([key, def]) => {
    let parser;

    switch (def.type) {
      case "string":
        parser = parseAsString.withDefault(def.default);
        break;

      case "number":
        parser = parseAsInteger.withDefault(def.default);
        break;

      case "array":
        parser = parseAsArrayOf(parseAsString).withDefault(def.default);
        break;

      default:
        throw new Error(`Unsupported filter type: ${def.type}`);
    }

    const [value, setValue] = useQueryState(key, parser);

    // Coerce null → default
    const safeValue = value ?? def.default;

    filters[key] = safeValue;
    set[key] = setValue;

    // Array fields get a toggle function
    if (def.type === "array") {
      toggle[key] = (item: string) => {
        const current = safeValue; // always array, never null

        setValue(
          current.includes(item)
            ? current.filter((v: string) => v !== item)
            : [...current, item]
        );
      };
    }
  });

  // Handle debounced fields
  const debounced: any = {};
  Object.keys(filters).forEach((key) => {
    if (config[key].debounce) {
      const [debouncedValue] = useDebounce(filters[key], config[key].debounce);
      debounced[key] = debouncedValue;
    }
  });

  const reset = () => {
    Object.keys(config).forEach((key) => {
      set[key](null);
    });
  };

  return {
    filters, // always non-null final values
    set,
    toggle,
    reset,
    debounced,
  };
}
