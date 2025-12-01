import { cn } from "@/shared/lib/utils";
import { CheckIcon, PlusIcon } from "lucide-react";

type SkillBadgeProps = {
  name: string;
  isSelected: boolean;
  className?: string;
};

const SkillBadge = (props: SkillBadgeProps) => {
  const { name, isSelected, className } = props;
  return (
    <div className={cn("skill-badge", className)} data-selected={isSelected}>
      <div className="w-3">
        {isSelected ? (
          <CheckIcon className="size-4" />
        ) : (
          <PlusIcon className="size-4" />
        )}
      </div>
      <span className="text-xs">{name}</span>
    </div>
  );
};

export default SkillBadge;
