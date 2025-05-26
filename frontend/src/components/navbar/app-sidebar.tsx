"use client";

import * as React from "react";
import {
  IconInnerShadowTop,
  IconListDetails,
  IconUsers,
} from "@tabler/icons-react";
import { LayoutDashboard } from "lucide-react";
import { NavMain } from "@/components/navbar/nav-main";
import { NavUser } from "@/components/navbar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usedataUser } from "@/services/getUser";
import { Skeleton } from "../ui/skeleton";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Produtos",
      url: "/dashboard/produtos",
      icon: IconListDetails,
    },
    {
      title: "Movimentação",
      url: "/dashboard/movimentacao",
      icon: IconUsers,
    },
    {
      title: "Funcionarios",
      url: "/dashboard/funcionarios",
      icon: LayoutDashboard,
    },
    {
      title: "Kanban",
      url: "/dashboard/kanban",
      icon: IconUsers,
    },
    
    {
      title: "Frente de Caixa",
      url: "/dashboard/frente_caixa",
      icon: LayoutDashboard,
    },
  ],
};

const Carregamento = () => {
  return (
    <div className="flex w-4xl items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[160px]" />
      </div>
    </div>
  );
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, loading } = usedataUser();

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">
                  Dashboard Empresarial
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        {loading ? (
          <Carregamento/>
        ) : (
          <NavUser user={user} />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
