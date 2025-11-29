import { StatusCell } from "@/shared/components/layout";
import { Row } from "@tanstack/react-table";
import React from "react";
import { JOB } from "../domain/job.types";

const JobsTableStatusCell = ({ row }: { row: Row<JOB> }) => {
  return <StatusCell status={row.original.status} />;
};

export default JobsTableStatusCell;
