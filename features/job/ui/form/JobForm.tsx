import { FormProvider, useForm } from "react-hook-form";
import { jobFormSchema, JobFormSchema } from "../../lib/job.validations";
import { Form } from "@/shared/components/ui/form";
import JobBasics from "./JobBasics";
import JobDescription from "./JobDescription";
import JobRequirements from "./JobRequirements";
import JobSkills from "./JobSkills";
import SalaryInformation from "./SalaryInformation";
import JobRecruiter from "./JobRecruiter";
import { PrimaryButtonWithLoading } from "@/shared/components/buttons/PrimaryButton";
import { PrimaryOutlineButtonWithLoading } from "@/shared/components/buttons/PrimaryOutlineButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClockIcon } from "@/shared/icons";

const JobForm = ({
  onSubmit,
  onSaveDraft,
}: {
  onSubmit: (data: JobFormSchema) => void;
  onSaveDraft: (data: JobFormSchema) => void;
}) => {
  const form = useForm<JobFormSchema>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      title: "",
      department: "",
      location: "",
      jobLevel: "",
      employmentType: "",
      locations: [],

      description: "",

      requirements: {
        minExperience: 0,
        skills: "",
        education: "",
        certifications: [],
      },

      skills: [],

      salary: {
        salaryType: "",
        minSalary: 0,
        maxSalary: 0,
        currency: "",
        additionalBenefits: "",
      },

      recruiter: {
        email: "",
        phone: "",
        showEmail: false,
        showPhone: false,
      },
    },
  });

  const handleSaveDraft = () => {};

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="space-y-12.5">
            <JobBasics />
            <JobDescription />
            <JobRequirements />
            <JobSkills />
            <SalaryInformation />
            <JobRecruiter />

            <section className="app-section">
              <h1>Publishing Options</h1>

              <div className="flex gap-5">
                <PrimaryButtonWithLoading className="w-51" type="submit">
                  Publish
                </PrimaryButtonWithLoading>

                <PrimaryOutlineButtonWithLoading
                  className="w-51"
                  type="button"
                  onClick={handleSaveDraft}
                >
                  Save as Draft
                </PrimaryOutlineButtonWithLoading>

                <PrimaryOutlineButtonWithLoading
                  className="w-51"
                  type="button"
                  onClick={handleSaveDraft}
                >
                  <ClockIcon />
                  Schedule Publish
                </PrimaryOutlineButtonWithLoading>
              </div>
            </section>
          </div>
        </form>
      </Form>
    </FormProvider>
  );
};

export default JobForm;
