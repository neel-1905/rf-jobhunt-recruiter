"use client";

import { DataTable } from "@/shared/components/layout";
import { getJobTableColumns } from "./job-table.columns";
import { data } from "../lib/jobs.dummy";
import { JOB } from "../domain/job.types";
import { useRouter } from "next/navigation";

export default function JobsTable() {
  const router = useRouter();
  const columns = getJobTableColumns();

  const handleRowSelectionChange = (selectedRows: JOB[]) => {
    console.log("Selected rows:", selectedRows);
  };

  const handleRowDoubleClick = (row: JOB) => {
    router.push(`/jobs/${row.id}`);
  };

  return (
    <DataTable
      data={data}
      columns={columns}
      onRowSelectionChange={handleRowSelectionChange}
      onDoubleClickRow={handleRowDoubleClick}
    />
  );
}
