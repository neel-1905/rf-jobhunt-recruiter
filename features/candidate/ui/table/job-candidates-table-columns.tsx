"use client";

export const getJobCandidatesTableColumns = (handleViewClick: any) => {
  return [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "experience",
      header: "Experience",
    },
    {
      accessorKey: "location",
      header: "Location",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }: { row: any }) => {
        return (
          <button
            onClick={() => handleViewClick(row.original)}
            className="text-primary px-3.5 text-xs bg-primary/10 rounded-[5px] h-7 flex-center font-medium"
          >
            View
          </button>
        );
      },
    },
  ];
};
