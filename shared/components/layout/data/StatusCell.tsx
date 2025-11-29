"use client";

import { Row } from "@tanstack/react-table";
import { Select } from "../../inputs";

const StatusCell = ({ status }: { status: string }) => {
  const options = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];

  return (
    <Select.Root
      name="Status"
      value={status}
      onValueChange={(value) => console.log(value)}
      options={options}
    >
      <Select.Trigger className="h-6.5 w-24 rounded-[6px]!">
        <Select.Input className="text-2xs! px-2" />
      </Select.Trigger>
      <Select.Dropdown>
        <Select.Option value="Active" label="Active" />
        <Select.Option value="Inactive" label="Inactive" />
      </Select.Dropdown>
    </Select.Root>
  );
};

export default StatusCell;
