import { AppSidebar } from "@/shared/components/layout";
import { SidebarInset, SidebarProvider } from "@/shared/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="contain-inline-size">
        {/* <main className="p-5 md:p-7.5 bg-page-bg flex-1 overflow-auto">
          <div className="h-full size-full overflow-auto space-y-5 gap-5">
            {children}
          </div>
        </main> */}
        <main className="bg-page-bg px-5 pb-5 md:px-7.5 md:pb-7.5 size-full">
          <div className="size-full space-y-5">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
