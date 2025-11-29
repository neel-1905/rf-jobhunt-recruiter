"use client";

import { useForm } from "react-hook-form";
import {
  personalDetailsFormSchema,
  PersonalDetailsFormSchema,
} from "../../lib/auth.validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/shared/components/ui/form";
import {
  FormSelectInput,
  FormTextInput,
} from "@/shared/components/form-inputs";
import { PrimaryButtonWithLoading } from "@/shared/components/buttons/PrimaryButton";

const PersonalDetails = () => {
  const form = useForm<PersonalDetailsFormSchema>({
    resolver: zodResolver(personalDetailsFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
    },
  });

  const onSubmit = (data: PersonalDetailsFormSchema) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="w-full space-y-5 max-w-[364px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormTextInput label="First Name" name="firstName" form={form} />
        <FormTextInput label="Last Name" name="lastName" form={form} />
        <FormTextInput label="Email" name="email" form={form} />
        <FormTextInput label="Phone" name="phone" form={form} />

        <FormSelectInput
          form={form}
          label="Country"
          name="country"
          options={[
            { value: "us", label: "United States" },
            { value: "ca", label: "Canada" },
            { value: "mx", label: "Mexico" },
          ]}
        />

        <PrimaryButtonWithLoading className="w-3xs mx-auto mt-2">
          Sign Up
        </PrimaryButtonWithLoading>
      </form>
    </Form>
  );
};

export default PersonalDetails;
