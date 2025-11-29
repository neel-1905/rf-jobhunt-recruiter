import { Checkbox } from "../../ui/checkbox";
import { Row } from "@tanstack/react-table";

const CheckboxColumnCell = <T extends Record<string, unknown>>({
  row,
}: {
  row: Row<T>;
}) => {
  return (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
      className="flex size-4.5"
    />
  );
};

export default CheckboxColumnCell;
