import { Checkbox } from "../../ui/checkbox";
import { Table } from "@tanstack/react-table";

const CheckboxColumnHeader = <T extends Record<string, unknown>>({
  table,
}: {
  table: Table<T>;
}) => {
  return (
    <Checkbox
      checked={
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && "indeterminate")
      }
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label="Select all"
      className="flex size-4.5"
    />
  );
};

export default CheckboxColumnHeader;
