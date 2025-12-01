"use client";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/shared/components/ui/sidebar";
import { ICONS } from "@/shared/constants/icons";
import { links } from "@/shared/constants/nav";
import { cn } from "@/shared/lib/utils";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AppSidebarMenu = () => {
  const pathname = usePathname();

  return (
    <SidebarMenu className="gap-4">
      {links.map((item) => {
        const isActive = pathname.startsWith(item.url);
        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              isActive={isActive}
              className={cn(
                "text-sidebar-text-inactive hover:text-primary hover:bg-transparent data-[active=true]:bg-transparent"
              )}
            >
              <Link href={item.url}>
                <item.icon className="size-4!" />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}

      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          className={cn(
            "text-sidebar-text-inactive hover:text-primary hover:bg-transparent data-[active=true]:bg-transparent"
          )}
        >
          <Link href="/notifications" className="flex-between">
            <div className="flex items-center gap-2">
              <Image
                src={ICONS.nav.notifications}
                alt="notifications"
                height={16}
                width={16}
              />
              <span>Notifications</span>
            </div>

            <div className="bg-primary size-3.5 rounded-full flex-center text-secondary font-semibold text-3xs shrink-0">
              <span>2</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default AppSidebarMenu;
