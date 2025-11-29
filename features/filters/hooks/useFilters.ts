"use client";

import {
  useQueryState,
  parseAsString,
  parseAsInteger,
  parseAsArrayOf,
  debounce,
} from "nuqs";

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

    const safeValue = value ?? def.default;
    filters[key] = safeValue;

    // ⭐ WRAP THE SETTER TO ADD OPTIONAL DEBOUNCE
    set[key] = (val: any) => {
      // No debounce → update immediately
      if (!def.debounce) {
        setValue(val);
        return;
      }

      // Debounced URL updates
      setValue(val, {
        limitUrlUpdates: debounce(def.debounce),
      });
    };

    // ⭐ For array filters → toggle logic
    if (def.type === "array") {
      toggle[key] = (item: string) => {
        const arr: string[] = safeValue;

        const next = arr.includes(item)
          ? arr.filter((v) => v !== item)
          : [...arr, item];

        set[key](next);
      };
    }
  });

  const reset = () => {
    Object.keys(config).forEach((key) => {
      set[key](null);
    });
  };

  return {
    filters,
    set,
    toggle,
    reset,
  };
}
