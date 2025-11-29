"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import {
  companyDetailsFormSchema,
  CompanyDetailsFormSchema,
} from "../../lib/auth.validations";
import { Form } from "@/shared/components/ui/form";
import { FormTextInput } from "@/shared/components/form-inputs";
import { PrimaryButtonWithLoading } from "@/shared/components/buttons/PrimaryButton";
import { FormSelectInput } from "@/shared/components/form-inputs";

const CompanyDetailsForm = () => {
  const form = useForm<CompanyDetailsFormSchema>({
    resolver: zodResolver(companyDetailsFormSchema),
    defaultValues: {
      companyName: "",
      email: "",
      phone: "",
      companyWebsite: "",
      companySize: 0,
      city: "",
      state: "",
      country: "",
    },
  });

  const onSubmit = (data: CompanyDetailsFormSchema) => {
    console.log(data);
  };

  const countryOptions = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "mx", label: "Mexico" },
  ];

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 w-full max-w-[460px]"
      >
        <div className=" grid sm:grid-cols-2 gap-x-5 gap-y-4">
          <FormTextInput label="Company Name" name="companyName" form={form} />
          <FormTextInput label="Email" type="email" name="email" form={form} />
          <FormTextInput label="Phone" type="tel" name="phone" form={form} />
          <FormTextInput
            label="Company Website"
            name="companyWebsite"
            form={form}
          />
          <FormTextInput
            label="Company Size"
            type="number"
            name="companySize"
            form={form}
          />

          <FormSelectInput
            label="City"
            name="city"
            form={form}
            options={countryOptions}
          />

          <FormSelectInput
            label="State"
            name="state"
            form={form}
            options={countryOptions}
          />

          <FormSelectInput
            label="Country"
            name="country"
            form={form}
            options={countryOptions}
          />
        </div>

        <PrimaryButtonWithLoading className="w-3xs mx-auto mt-2">
          Sign Up
        </PrimaryButtonWithLoading>
      </form>
    </Form>
  );
};

export default CompanyDetailsForm;
