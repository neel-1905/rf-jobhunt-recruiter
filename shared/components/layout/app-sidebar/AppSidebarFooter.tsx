"use client";

import { SidebarFooter, useSidebar } from "../../ui/sidebar";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";

const AppSidebarFooter = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarFooter className="border-t p-3">
      <div className="py-2.5 px-3 w-full flex items-center gap-3">
        <Avatar className="size-9.5!">
          <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className={"flex flex-col min-w-0 overflow-hidden"}>
          <span className="text-sm leading-5 text-nowrap">My Profile</span>
          <span className="truncate text-muted-foreground text-xs text-nowrap">
            admin@companyname.com
          </span>
        </div>
      </div>
    </SidebarFooter>
  );
};

export default AppSidebarFooter;
