"use client";

import { useState } from "react";
import JobsTable from "@/features/job/ui/JobsTable";
import {
  DataLayoutRoot,
  DataLayoutFilters,
  DataLayoutContent,
  DataLayoutPagination,
} from "@/shared/components/layout/data/DataLayout";

const DashboardTableWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log("Page changed to:", page);
    // TODO: Fetch data from backend for the new page
  };

  return (
    <DataLayoutRoot>
      <DataLayoutFilters />
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
