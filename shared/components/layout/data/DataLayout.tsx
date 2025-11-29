"use client";

import { Suspense } from "react";
import DataTableFiltersBar from "./DataTableFiltersBar";
import { Pagination, PaginationText } from "./Pagination";

export function DataLayoutRoot({ children }: { children: React.ReactNode }) {
  return <div className="space-y-5 w-full">{children}</div>;
}

export function DataLayoutFilters() {
  return (
    <div className="w-full bg-background rounded-primary p-4 border">
      <DataTableFiltersBar />
    </div>
  );
}

export function DataLayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-background rounded-primary border">
      <Suspense>{children}</Suspense>
    </div>
  );
}

interface DataLayoutPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  startItem?: number;
  endItem?: number;
  totalItems?: number;
  itemName?: string;
}

export function DataLayoutPagination({
  currentPage,
  totalPages,
  onPageChange,
  startItem,
  endItem,
  totalItems,
  itemName = "items",
}: DataLayoutPaginationProps) {
  //  sticky bottom-0 bg-page-bg
  return (
    <div className="flex-between w-full">
      <PaginationText
        startItem={startItem}
        endItem={endItem}
        totalItems={totalItems}
        itemName={itemName}
      />

      {/* <div className="flex-center gap-1"> */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      {/* </div> */}
    </div>
  );
}
