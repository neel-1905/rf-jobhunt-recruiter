import { FormTextInput } from "@/shared/components/form-inputs";
import React from "react";
import { JobFormSchema } from "../../lib/job.validations";
import { useFormContext } from "react-hook-form";

const JobRequirements = () => {
  const form = useFormContext<JobFormSchema>();

  return (
    <section className="app-section">
      <h1>Job Requirements</h1>

      <div className="form-grid">
        <FormTextInput
          label="Minimum Experience"
          name="requirements.minExperience"
          form={form}
          type="number"
        />

        {/* <FormSelectInput label="Skills" name="requirements.skills" form={form} /> */}

        <FormTextInput
          label="Education"
          name="requirements.education"
          form={form}
        />

        <FormTextInput
          label="Certifications"
          name="requirements.certifications"
          form={form}
        />
      </div>
    </section>
  );
};

export default JobRequirements;
