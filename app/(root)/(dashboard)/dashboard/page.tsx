import DashboardCta from "@/features/dashboard/ui/DashboardCta";
import DashboardStats from "@/features/dashboard/ui/DashboardStats";
import DashboardTableWrapper from "@/features/dashboard/ui/DashboardTableWrapper";
import { AppHeader } from "@/shared/components/layout";

// DashboardPage.tsx
const DashboardPage = () => {
  return (
    <>
      <AppHeader title="Dashboard" subtitle="Manage your recruitment pipeline">
        <DashboardCta />
      </AppHeader>
      <DashboardStats />
      <DashboardTableWrapper />
    </>
  );
};

export default DashboardPage;
