type SkillDisplayBadgeProps = {
  name: string;
  className?: string;
};

const SkillDisplayBadge = (props: SkillDisplayBadgeProps) => {
  const { name, className } = props;
  return (
    <div className="bg-primary/10 flex-center rounded-sm text-primary text-2xs py-1.5 px-3">
      {name}
    </div>
  );
};

export default SkillDisplayBadge;
