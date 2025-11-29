"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/shared/components/ui/form";
import {
  FormSelectInput,
  FormTextInput,
} from "@/shared/components/form-inputs";
import { PrimaryButtonWithLoading } from "@/shared/components/buttons/PrimaryButton";
import {
  inviteMembersFormSchema,
  InviteMembersFormSchema,
} from "../../lib/auth.validations";

const InviteMembersForm = () => {
  const form = useForm<InviteMembersFormSchema>({
    resolver: zodResolver(inviteMembersFormSchema),
    defaultValues: {
      email: "",
      role: "",
    },
  });

  const onSubmit = (data: InviteMembersFormSchema) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="w-full space-y-5 max-w-[364px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormTextInput label="Member Email" name="email" form={form} />

        <FormSelectInput
          label="Role"
          name="role"
          form={form}
          options={[
            { value: "admin", label: "Admin" },
            { value: "member", label: "Member" },
          ]}
        />

        <PrimaryButtonWithLoading className="w-3xs mx-auto mt-6">
          Invite Member
        </PrimaryButtonWithLoading>

        <div className="flex-center">
          <button className="text-primary mt-3 text-xs font-medium hover:underline">
            Skip
          </button>
        </div>
      </form>
    </Form>
  );
};

export default InviteMembersForm;
