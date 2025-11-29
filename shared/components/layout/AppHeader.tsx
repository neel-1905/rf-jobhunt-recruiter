const AppHeader = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) => {
  return (
    <header className="app-header">
      <div>
        <h1 className="mb-3">{title}</h1>
        <p>{subtitle}</p>
      </div>

      {children && <div>{children}</div>}
    </header>
  );
};

export default AppHeader;
