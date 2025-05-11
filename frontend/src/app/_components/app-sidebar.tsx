"use client"

import * as React from "react"
import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconInnerShadowTop,
  IconListDetails,
  IconUsers,
} from "@tabler/icons-react"

import { NavMain } from "@/app/_components/nav-main"
import { NavUser } from "@/app/_components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usedataUser } from "@/hooks/use-datauser"



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
      icon: IconDashboard,
    },
    {
      title: "Produtos",
      url: "/dashboard/produtos",
      icon: IconListDetails,
    },
    {
      title: "Vendas",
      url: "/dashboard/vendas",
      icon: IconChartBar,
    },
    {
      title: "Clientes",
      url: "/dashboard/clientes",
      icon: IconFolder,
    },
    {
      title: "Relatórios",
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
