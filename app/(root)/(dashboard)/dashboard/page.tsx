import DashboardCta from "@/features/dashboard/ui/DashboardCta";
import DashboardStats from "@/features/dashboard/ui/DashboardStats";
import DashboardTableWrapper from "@/features/dashboard/ui/DashboardTableWrapper";

// DashboardPage.tsx
const DashboardPage = () => {
  return (
    <div className="size-full overflow-auto space-y-5 gap-5">
      <div className="flex-between flex-wrap gap-3">
        <span className="text-base font-medium text-muted-foreground">
          Manage your recruitment pipeline
        </span>

        <DashboardCta />
      </div>

      <DashboardStats />

      <DashboardTableWrapper />
    </div>
  );
};

export default DashboardPage;
