"use client";

import {
  CheckboxColumnCell,
  CheckboxColumnHeader,
} from "@/shared/components/layout";
import { ColumnDef } from "@tanstack/react-table";
import { JOB } from "../domain/job.types";
import JobsTableStatusCell from "./JobsTableStatusCell";
import { formatToHHMMA, formatToMMDDYYYY } from "@/shared/lib/date.utils";

export const getJobTableColumns = (): ColumnDef<JOB>[] => {
  return [
    // Selection Column
    {
      id: "select",
      header: ({ table }) => <CheckboxColumnHeader table={table} />,
      cell: ({ row }) => <CheckboxColumnCell row={row} />,
      enableSorting: false,
      enableHiding: false,
    },
    // Job Title
    {
      accessorKey: "title",
      header: "Job Title",
    },
    // Location
    {
      accessorKey: "location",
      header: "Location",
    },
    // Candidates Applied
    {
      accessorKey: "candidatesApplied",
      header: "Candidates Applied",
      cell: ({ row }) => {
        return <p>{row.original.candidatesApplied}</p>;
      },
    },
    // Recruiter
    {
      accessorKey: "recruiter",
      header: "Recruiter",
    },
    // Department
    {
      accessorKey: "department",
      header: "Department",
    },
    // Status
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        return <JobsTableStatusCell row={row} />;
      },
    },
    // Posted Date/Time
    {
      accessorKey: "postedDate",
      header: "Posted Date/Time",
      cell: ({ row }) => {
        const date = formatToMMDDYYYY(row.original.postedDate);
        const time = formatToHHMMA(row.original.postedDate);

        return (
          <div className="flex flex-col gap-1">
            <p>{date} </p>
            <p>{time}</p>
          </div>
        );
      },
    },
    // Actions
    {
      id: "actions",
      header: "Actions",
      cell: () => <p className="text-primary cursor-pointer">Edit</p>,
    },
  ];
};
