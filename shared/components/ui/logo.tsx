import { APP } from "@/shared/constants";
import { LogoIcon } from "@/shared/icons";
import { cn } from "@/shared/lib/utils";

const Logo = ({
  textClass,
  logoClass,
  className,
}: {
  textClass?: string;
  logoClass?: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <LogoIcon className={cn("text-primary size-9", logoClass)} />
      <span className={cn("font-semibold text-2xl", textClass)}>
        {APP.name}
      </span>
    </div>
  );
};

export default Logo;
