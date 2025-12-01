"use client";

import { JobFormSchema } from "../../lib/job.validations";
import JobForm from "./JobForm";

const AddNewJob = () => {
  const onSubmit = (data: JobFormSchema) => {
    console.log(data);
  };

  const handleSaveDraft = (data: JobFormSchema) => {
    console.log(data);
  };

  return (
    <div className="bg-background rounded-primary px-10 py-11.5">
      <JobForm onSubmit={onSubmit} onSaveDraft={handleSaveDraft} />
    </div>
  );
};

export default AddNewJob;
