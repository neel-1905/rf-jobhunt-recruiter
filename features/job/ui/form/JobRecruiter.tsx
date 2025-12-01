import {
  FormCheckboxInput,
  FormTextInput,
} from "@/shared/components/form-inputs";
import { useFormContext } from "react-hook-form";
import { JobFormSchema } from "../../lib/job.validations";

const JobRecruiter = () => {
  const form = useFormContext<JobFormSchema>();

  return (
    <section className="form-section">
      <h1>Recruiter Contact</h1>

      <div className="form-grid mb-5">
        <FormTextInput label="Email" name="recruiter.email" form={form} />
        <FormTextInput label="Phone" name="recruiter.phone" form={form} />
      </div>

      <p className="text-sm font-medium text-foreground/80 mb-5">
        Show Details to candidate
      </p>

      <div className="space-y-3.5">
        <FormCheckboxInput
          label="Email Address"
          name="recruiter.showEmail"
          form={form}
        />
        <FormCheckboxInput
          label="Phone Number"
          name="recruiter.showPhone"
          form={form}
        />
      </div>
    </section>
  );
};

export default JobRecruiter;
