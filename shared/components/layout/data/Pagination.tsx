import { cn } from "@/shared/lib/utils";
import FilterButton from "@/features/filters/ui/FilterButton";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

type PaginationTextProps = {
  startItem?: number;
  endItem?: number;
  totalItems?: number;
  itemName?: string;
};

export function PaginationText({
  startItem,
  endItem,
  totalItems,
  itemName,
}: PaginationTextProps) {
  if (!startItem || !endItem || !totalItems) {
    return null;
  }

  return (
    <span className="text-muted-foreground text-sm">
      Showing {startItem}-{endItem} of {totalItems} {itemName}
    </span>
  );
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 7) {
      // Show all pages if 7 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage <= 3) {
        // Near the beginning: 1 2 3 4 ... 10
        for (let i = 2; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("ellipsis");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end: 1 ... 7 8 9 10
        pages.push("ellipsis");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle: 1 ... 4 5 6 ... 10
        pages.push("ellipsis");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("ellipsis");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex-center gap-2">
      <FilterButton
        label="Previous"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />

      {pageNumbers.map((page, index) => {
        if (page === "ellipsis") {
          return (
            <div
              key={`ellipsis-${index}`}
              className="size-8 flex-center text-muted-foreground"
            >
              ...
            </div>
          );
        }

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              `bg-background border rounded-md text-sm flex-center size-8 transition-colors hover:bg-table-header ${
                currentPage === page ? "text-primary border-primary/50" : ""
              }`,
              className
            )}
          >
            {page}
          </button>
        );
      })}

      <FilterButton
        label="Next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </div>
  );
}
