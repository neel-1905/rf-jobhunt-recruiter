import { candidateDetails } from "@/features/candidate/lib/candidates.dummy";
import CandidateActions from "@/features/candidate/ui/CandidateActions";
import CandidatesCta from "@/features/candidate/ui/CandidatesCta";
import JobDetails from "@/features/job/ui/details/JobDetails";
import { AppHeader } from "@/shared/components/layout";
import DetailsSection from "@/shared/components/layout/DetailsSection";

type Props = {
  params: Promise<{
    id: string;
    candidateId: string;
  }>;
};

const page = async (props: Props) => {
  const { id, candidateId } = await props.params;
  return (
    <>
      <AppHeader
        title="Candidate Details"
        subtitle="Track and review all submitted applications."
      >
        <CandidatesCta />
      </AppHeader>

      <DetailsSection
        details={candidateDetails}
        layoutClassName="2lg:grid-cols-4 xl:grid-cols-4"
      >
        <CandidateActions />
      </DetailsSection>

      <JobDetails />
    </>
  );
};

export default page;
