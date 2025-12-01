import AddNewJob from "@/features/job/ui/form/AddNewJob";
import { AppHeader } from "@/shared/components/layout";
import React from "react";

const page = () => {
  return (
    <>
      <AppHeader
        title="Add New Job"
        subtitle="Create and post a new opening."
      />

      <AddNewJob />
    </>
  );
};

export default page;
