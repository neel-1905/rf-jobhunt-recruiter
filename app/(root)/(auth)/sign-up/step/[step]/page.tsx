import SignUpForm from "@/features/auth/ui/signup-form/SignUpForm";
import SignUpSteps from "@/features/auth/ui/SignUpSteps";

type Props = {
  params: Promise<{
    step: string;
  }>;
};

const page = async (props: Props) => {
  const { step } = await props.params;

  const stepsMap = {
    "1": "Personal Details",
    "2": "Company Details",
    "3": "Invite Members",
  };

  const currentStep = stepsMap[step as keyof typeof stepsMap];

  return (
    <div className="flex-center-col w-full">
      <h1 className="mb-5">Signup</h1>
      <p className="instruction mb-7.5">
        How to i get started lorem ipsum dolor at?
      </p>

      <SignUpSteps step={step} />

      <SignUpForm currentStep={currentStep} />
    </div>
  );
};

export default page;
