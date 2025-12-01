import { useFormContext } from "react-hook-form";
import { JobFormSchema } from "../../lib/job.validations";
import {
  FormSelectInput,
  FormTextInput,
} from "@/shared/components/form-inputs";

const SalaryInformation = () => {
  const form = useFormContext<JobFormSchema>();

  return (
    <section className="form-section">
      <h1>Salary Information</h1>

      <div className="form-grid">
        <FormSelectInput
          label="Salary Type"
          name="salary.salaryType"
          form={form}
          options={[
            { value: "1", label: "Hourly" },
            { value: "2", label: "Yearly" },
            { value: "3", label: "Monthly" },
          ]}
        />
        <FormTextInput
          label="Minimum Salary"
          name="salary.minSalary"
          form={form}
          type="number"
        />
        <FormTextInput
          label="Maximum Salary"
          name="salary.maxSalary"
          form={form}
          type="number"
        />
        <FormSelectInput
          label="Currency"
          name="salary.currency"
          form={form}
          options={[
            { value: "1", label: "USD" },
            { value: "2", label: "CAD" },
            { value: "3", label: "MXN" },
          ]}
        />
        {/* <FormTextInput label="Additional Benefits" name="salary.additionalBenefits" form={form} /> */}
      </div>
    </section>
  );
};

export default SalaryInformation;
