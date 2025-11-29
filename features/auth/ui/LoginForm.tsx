"use client";
import { PrimaryButtonWithLoading } from "@/shared/components/buttons/PrimaryButton";
import { FormTextInput } from "@/shared/components/form-inputs";
import { Form } from "@/shared/components/ui/form";
import { EmailIcon } from "@/shared/icons";
import { useForm } from "react-hook-form";
import { loginFormSchema, LoginFormSchema } from "../lib/auth.validations";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: LoginFormSchema) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormTextInput
          label="Email"
          name="email"
          form={form}
          type="email"
          icon={<EmailIcon />}
        />

        <PrimaryButtonWithLoading
          className="w-3xs mx-auto mt-6"
          isLoading={form.formState.isSubmitting}
        >
          Send OTP
        </PrimaryButtonWithLoading>
      </form>
    </Form>
  );
};

export default LoginForm;
