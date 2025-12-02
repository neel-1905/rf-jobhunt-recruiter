"use client";
import { DataTable } from "@/shared/components/layout";
import { candidatesDummy } from "../../lib/candidates.dummy";
import { getJobCandidatesTableColumns } from "./job-candidates-table-columns";
import { useParams, useRouter } from "next/navigation";

const JobCandidatesTable = () => {
  const router = useRouter();
  const { id } = useParams();

  const handleRowDoubleClick = (row: any) => {
    router.push(`/jobs/${id}/candidates/${row.id}`);
  };

  const handleViewClick = (candidate: any) => {
    router.push(`/jobs/${id}/candidates/${candidate.id}`);
  };

  const columns = getJobCandidatesTableColumns(handleViewClick);

  return (
    <DataTable
      columns={columns}
      data={candidatesDummy}
      onDoubleClickRow={handleRowDoubleClick}
    />
  );
};

export default JobCandidatesTable;
