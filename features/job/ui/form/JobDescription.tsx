import { useFormContext } from "react-hook-form";
import { JobFormSchema } from "../../lib/job.validations";

const JobDescription = () => {
  const form = useFormContext<JobFormSchema>();

  return (
    <section className="app-section">
      <h1>Job Description</h1>
    </section>
  );
};

export default JobDescription;
