"use client";

import { useState } from "react";
import JobsTable from "@/features/job/ui/JobsTable";
import {
  DataLayoutRoot,
  DataLayoutFilters,
  DataLayoutContent,
  DataLayoutPagination,
} from "@/shared/components/layout/data/DataLayout";
import { FilterConfig } from "@/features/filters/domain/filter.types";

const DashboardTableWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log("Page changed to:", page);
    // TODO: Fetch data from backend for the new page
  };

  const filters: FilterConfig[] = [
    {
      type: "multi-select",
      label: "Status",
      name: "status",
      options: [
        { value: "Active", label: "Active" },
        { value: "Inactive", label: "Inactive" },
        { value: "Draft", label: "Draft" },
        { value: "Archived", label: "Archived" },
        { value: "Pending", label: "Pending" },
        { value: "Rejected", label: "Rejected" },
        { value: "Approved", label: "Approved" },
        { value: "Published", label: "Published" },
      ],
    },
  ];

  return (
    <DataLayoutRoot>
      <DataLayoutFilters filters={filters} />
      <DataLayoutContent>
        <JobsTable />
      </DataLayoutContent>
      <DataLayoutPagination
        currentPage={currentPage}
        totalPages={1}
        onPageChange={handlePageChange}
        startItem={1}
        endItem={10}
        totalItems={10}
        itemName="leads"
      />
    </DataLayoutRoot>
  );
};

export default DashboardTableWrapper;
