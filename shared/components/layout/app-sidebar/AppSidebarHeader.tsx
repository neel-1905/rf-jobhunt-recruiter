"use client";
import { Activity } from "react";
import Logo from "../../ui/logo";
import { SidebarHeader, useSidebar } from "../../ui/sidebar";
import { LogoIcon } from "@/shared/icons";
import { cn } from "@/shared/lib/utils";

const AppSidebarHeader = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarHeader className="p-0 overflow-hidden">
      <div className="px-6! py-6 overflow-hidden!">
        <Logo
          textClass={cn("font-medium text-xl text-nowrap", {
            hidden: isCollapsed,
          })}
          logoClass="size-8 text-primary shrink-0"
        />
      </div>
    </SidebarHeader>
  );
};

export default AppSidebarHeader;
