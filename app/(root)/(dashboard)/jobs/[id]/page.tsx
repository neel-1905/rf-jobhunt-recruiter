import { jobDetails } from "@/features/job/lib/jobs.dummy";
import JobDetails from "@/features/job/ui/details/JobDetails";
import JobDetailsCta from "@/features/job/ui/details/JobDetailsCta";
import { AppHeader } from "@/shared/components/layout";
import DetailsSection from "@/shared/components/layout/DetailsSection";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const page = async (props: Props) => {
  const { id } = await props.params;
  return (
    <>
      <AppHeader
        title="Job Details"
        subtitle="Track and review all submitted applications."
      >
        <JobDetailsCta />
      </AppHeader>

      <DetailsSection details={jobDetails}>
        <div className="bg-primary/20 w-full flex-center p-2 rounded-b-primary">
          <Link href={`/jobs/${id}/candidates`}>
            <span className="text-primary underline text-xsm font-medium">
              10 Applied Candidates
            </span>
          </Link>
        </div>
      </DetailsSection>

      <JobDetails />
    </>
  );
};

export default page;
