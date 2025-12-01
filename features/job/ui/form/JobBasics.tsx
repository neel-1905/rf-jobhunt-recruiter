"use client";

import { FormSelectInput } from "@/shared/components/form-inputs";
import { useFieldArray, useFormContext } from "react-hook-form";
import { JobFormSchema } from "../../lib/job.validations";
import PrimaryOutlineButton from "@/shared/components/buttons/PrimaryOutlineButton";
import PlusIcon from "@/shared/icons/PlusIcon";
import { Trash2 } from "lucide-react";

const JobBasics = () => {
  const form = useFormContext<JobFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "locations",
  });

  const handleAddLocation = () => {
    append({ city: "", state: "", country: "" });
  };

  const cityOptions = [
    { value: "1", label: "New York" },
    { value: "2", label: "San Francisco" },
    { value: "3", label: "Los Angeles" },
  ];

  const stateOptions = [
    { value: "1", label: "California" },
    { value: "2", label: "New York" },
    { value: "3", label: "Texas" },
  ];

  const countryOptions = [
    { value: "1", label: "United States" },
    { value: "2", label: "Canada" },
    { value: "3", label: "Mexico" },
  ];

  return (
    <section className="form-section">
      <h1>Job Basics</h1>

      <div className="gap-y-5">
        <div className="form-grid">
          <FormSelectInput
            form={form}
            label="Job Title"
            name="title"
            options={[
              { value: "1", label: "Software Engineer" },
              { value: "2", label: "Product Manager" },
              { value: "3", label: "Data Scientist" },
            ]}
          />

          <FormSelectInput
            form={form}
            label="Department"
            name="department"
            options={[
              { value: "1", label: "Engineering" },
              { value: "2", label: "Product" },
              { value: "3", label: "Data" },
            ]}
          />

          <FormSelectInput
            form={form}
            label="Job Level"
            name="jobLevel"
            options={[
              { value: "1", label: "Entry Level" },
              { value: "2", label: "Mid Level" },
              { value: "3", label: "Senior Level" },
            ]}
          />

          <FormSelectInput
            form={form}
            label="Employment Type"
            name="employmentType"
            options={[
              { value: "1", label: "Full Time" },
              { value: "2", label: "Part Time" },
              { value: "3", label: "Contract" },
            ]}
          />
        </div>
      </div>

      {/* Location Rows */}
      <div className="mt-5 space-y-5">
        {fields.map((field, index) => (
          <div key={field.id}>
            <h2 className="text-sm font-semibold text-foreground/80 mb-2">
              Location {index + 1}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              <FormSelectInput
                form={form}
                label="City"
                name={`locations.${index}.city`}
                options={cityOptions}
              />

              <FormSelectInput
                form={form}
                label="State"
                name={`locations.${index}.state`}
                options={stateOptions}
              />

              <FormSelectInput
                form={form}
                label="Country"
                name={`locations.${index}.country`}
                options={countryOptions}
              />

              <div className="flex items-center">
                <button type="button" onClick={() => remove(index)}>
                  <Trash2 className="size-5 text-destructive" />
                </button>
              </div>
            </div>
          </div>
        ))}

        <PrimaryOutlineButton
          type="button"
          onClick={handleAddLocation}
          className="w-max!"
        >
          <PlusIcon />
          Add Location
        </PrimaryOutlineButton>
      </div>
    </section>
  );
};

export default JobBasics;
