type DetailsSectionProps = {
  details: Record<string, any>;
  children?: React.ReactNode;
};

const DetailsSection = ({ details, children }: DetailsSectionProps) => {
  return (
    <section className="details-section">
      <div className="details-grid">
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
