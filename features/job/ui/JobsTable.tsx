"use client";

import { DataTable } from "@/shared/components/layout";
import { getJobTableColumns } from "./job-table.columns";
import { data } from "../lib/jobs.dummy";
import { JOB } from "../domain/job.types";

export default function JobsTable() {
  const columns = getJobTableColumns();

  const handleRowSelectionChange = (selectedRows: JOB[]) => {
    console.log("Selected rows:", selectedRows);
  };

  return (
    <DataTable
      data={data}
      columns={columns}
      onRowSelectionChange={handleRowSelectionChange}
    />
  );
}
