import {
  DataLayoutContent,
  DataLayoutFilters,
  DataLayoutRoot,
} from "@/shared/components/layout/data/DataLayout";
import JobCandidatesTable from "./table/JobCandidatesTable";
import { FilterConfig } from "@/features/filters/domain/filter.types";

const JobCandidates = () => {
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
        <JobCandidatesTable />
      </DataLayoutContent>
      {/* <DataLayoutPagination
            currentPage={currentPage}
            totalPages={1}
            onPageChange={handlePageChange}
            startItem={1}
            endItem={10}
            totalItems={10}
            itemName="leads"
          /> */}
    </DataLayoutRoot>
  );
};

export default JobCandidates;
