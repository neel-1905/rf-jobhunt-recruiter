import { cn } from "@/shared/lib/utils";

type DetailsSectionProps = {
  details: Record<string, any>;
  children?: React.ReactNode;
  className?: string;
  layoutClassName?: string;
};

const DetailsSection = ({
  details,
  children,
  className,
  layoutClassName,
}: DetailsSectionProps) => {
  return (
    <section className={cn(`details-section`, className)}>
      <div className={cn("details-grid", layoutClassName)}>
        {Object.entries(details).map(([key, value]) => {
          return (
            <div key={key} className="details">
              <h3 className="text-sm">{value}</h3>
              <h2 className="text-sm text-muted-foreground">{key}</h2>
            </div>
          );
        })}
      </div>

      {children}
    </section>
  );
};

export default DetailsSection;
