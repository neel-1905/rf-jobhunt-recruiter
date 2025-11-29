import { AppHeader, AppSidebar } from "@/shared/components/layout";
import { SidebarInset, SidebarProvider } from "@/shared/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      {/* FIX: Give SidebarInset full screen height */}
      <SidebarInset className="contain-inline-size flex flex-col h-screen">
        <AppHeader />
        <main className="p-5 md:p-7.5 bg-page-bg flex-1 overflow-auto">
          {/* FIX: Give the inner wrapper flex height */}
          <div className="h-full">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
