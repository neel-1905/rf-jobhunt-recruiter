import LoginForm from "@/features/auth/ui/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex-center-col  max-w-[364px] w-full">
      <h1 className="mb-5">Login</h1>
      <p className="instruction mb-7.5">
        How to i get started lorem ipsum dolor at?
      </p>

      <LoginForm />

      <p className="footer mt-5">
        Do not have account?{" "}
        <Link href={`/sign-up`} className="link">
          Signup Now
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
