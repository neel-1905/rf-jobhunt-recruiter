"use client";
import { useForm } from "react-hook-form";
import { otpFormSchema, OtpFormSchema } from "../lib/auth.validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/shared/components/ui/form";
import { PrimaryButtonWithLoading } from "@/shared/components/buttons/PrimaryButton";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/shared/components/ui/input-otp";
import OtpTimer from "./OtpTimer";

const OtpForm = () => {
  const form = useForm<OtpFormSchema>({
    resolver: zodResolver(otpFormSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data: OtpFormSchema) => {
    console.log(data);
  };

  const handleResend = () => {
    console.log("Resend OTP");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-[230px] flex-center-col"
      >
        <InputOTP maxLength={4}>
          <InputOTPGroup className="gap-3.5 mb-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <InputOTPSlot
                className="rounded-primary bg-[#eff0f4] border-none outline-none ring-0! size-12 font-medium text-lg"
                key={index}
                index={index}
              />
            ))}
          </InputOTPGroup>
        </InputOTP>

        <OtpTimer onResend={handleResend} />

        <PrimaryButtonWithLoading className="w-48.5 mt-7.5">
          Verify
        </PrimaryButtonWithLoading>
      </form>

      <div className="footer flex items-center gap-1 mt-5">
        <p>Not received your code?</p>{" "}
        <button type="button" className="text-primary" onClick={handleResend}>
          Resend code
        </button>
      </div>
    </Form>
  );
};

export default OtpForm;
