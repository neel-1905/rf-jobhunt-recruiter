import OtpForm from "@/features/auth/ui/OtpForm";
import { EditIcon } from "@/shared/icons";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex-center-col w-full">
      <h1 className="mb-5">Email Verification</h1>
      <div className=" mb-7.5 flex items-center gap-2">
        <p className="instruction">
          Please enter the OTP sent to{" "}
          <span className="font-semibold text-foreground">
            spansumitrathaur@gmail.com
          </span>
        </p>

        <Link href={`/login`}>
          <EditIcon className="size-3" />
        </Link>
      </div>

      <OtpForm />
    </div>
  );
};

export default page;
