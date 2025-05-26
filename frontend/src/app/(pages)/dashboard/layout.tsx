import { SiteHeader } from "@/components/_components/site-header"
import { AppSidebar } from "@/components/navbar/app-sidebar"

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
           {children}
          </SidebarInset>
        </SidebarProvider>
          
        </div>
    )
}

export default LayoutDashboard