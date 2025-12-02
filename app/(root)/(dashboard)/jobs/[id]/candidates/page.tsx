import JobCandidates from "@/features/candidate/ui/JobCandidates";
import JobCandidatesCta from "@/features/candidate/ui/JobCandidatesCta";
import { AppHeader } from "@/shared/components/layout";
import React from "react";

const page = () => {
  return (
    <>
      <AppHeader
        title="Candidates Applied"
        subtitle="Manage your recruitment pipeline"
      >
        <JobCandidatesCta />
      </AppHeader>

      <JobCandidates />
    </>
  );
};

export default page;
