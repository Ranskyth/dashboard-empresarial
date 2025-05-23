"use client"

import * as React from "react"
import {
  IconInnerShadowTop,
  IconListDetails,
  IconUsers,
} from "@tabler/icons-react"
import { LayoutDashboard } from "lucide-react"
import { NavMain } from "@/components/navbar/nav-main"
import { NavUser } from "@/components/navbar/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usedataUser } from "@/services/getUser"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/ranskyth.png",
  },
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
      title: "Relatórios",
      url: "/dashboard/relatorios",
      icon: IconUsers,
    },
        {
      title: "Funcionarios",
      url: "/dashboard/funcionarios",
      icon: LayoutDashboard,
    },
        {
      title: "Kanban",
      url: "/dashboard/relatorios",
      icon: IconUsers,
    },
  ],
}

interface ITypeDataUser{
  nome: string; 
  email: string; 
  avatar: string; 
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const users = usedataUser() as ITypeDataUser
    
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
                <span className="text-base font-semibold">Dashboard Empresarial</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={users} />
      </SidebarFooter>
    </Sidebar>
  )
}
