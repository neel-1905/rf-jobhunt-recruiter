import { cn } from "@/shared/lib/utils";

const SignUpSteps = ({ step }: { step: string }) => {
  const signUpSteps = [
    { id: 1, name: "Personal Details" },
    { id: 2, name: "Company Details" },
    { id: 3, name: "Invite Members" },
  ];

  return (
    <div className="flex items-center justify-evenly flex-wrap gap-3 mb-7.5 border border-primary rounded-full py-3 px-2 md:px-4">
      {signUpSteps.map((s, index) => {
        const isCurrent = s.id === Number(step);
        const isCompleted = s.id < Number(step);
        const isLast = s.id === signUpSteps.length;

        return (
          <div className="flex-center gap-3" key={`signup-steps-${index}`}>
            <div className="flex items-center gap-1.5">
              <div
                className={cn(
                  "size-4 text-3xs flex-center rounded-full font-medium bg-[#FFD2D8] ",
                  {
                    "bg-success text-background": isCurrent,
                    "bg-primary text-background": isCompleted,
                  }
                )}
              >
                {index + 1}
              </div>
              <span
                className={cn("text-3xs font-medium", {
                  "text-success": isCurrent,
                  "text-primary": isCompleted,
                })}
              >
                {s.name}
              </span>
            </div>

            {!isLast && <div className="hidden md:block w-4 h-px bg-border" />}
          </div>
        );
      })}
    </div>
  );
};

export default SignUpSteps;
