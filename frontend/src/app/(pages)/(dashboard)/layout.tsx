'use client'

import { AppSidebar } from "@/app/_components/app-sidebar"
import { AuthContextProvider } from "@/app/_components/context/auth-context"

import { SiteHeader } from "@/app/_components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { ReactNode } from "react"

const LayoutDashboard = ({children}:{children:ReactNode}) => {

    return (
        <div>
        <SidebarProvider
          style={
            {
              "--sidebar-width": "calc(var(--spacing) * 72)",
              "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties
          }
        >
          <AppSidebar variant="inset" />
          <SidebarInset>
            <SiteHeader />
            <AuthContextProvider>{children}</AuthContextProvider>
          </SidebarInset>
        </SidebarProvider>
          
        </div>
    )
}

export default LayoutDashboard