import { OPTION } from "@/shared/types";

export type FilterConfig = {
  type: "multi-select";
  label: string;
  name: string;
  options: OPTION[];
  defaultSelected?: string[];
};
