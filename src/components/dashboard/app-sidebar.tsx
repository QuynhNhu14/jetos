import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { IconAnalytics, IconDashboard, IconMessage, IconPersonal, IconSetting, IconTransaction, IconWallet } from "../ui/icon"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: IconDashboard,
    active: true
  },
  {
    title: "Transactions",
    url: "#",
    icon: IconTransaction,
    active: false
  },
  {
    title: "Wallet",
    url: "#",
    icon: IconWallet,
    active: false
  },
  {
    title: "Analytics",
    url: "#",
    icon: IconAnalytics,
    active: false
  },
  {
    title: "Personal",
    url: "#",
    icon: IconPersonal,
    active: false
  },
  {
    title: "Message",
    url: "#",
    icon: IconMessage,
    active: false
  },
  {
    title: "Setting",
    url: "#",
    icon: IconSetting,
    active: false
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent >
        <SidebarGroup className="items-center top-4">
          <SidebarGroupLabel >
            <Image src="/logo.svg" alt="logo" width={200} height={45}/>
         </SidebarGroupLabel>
          <SidebarGroupContent className="pt-6">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size={"lg"} isActive={item.active}>
                    <a href={item.url} className="pl-8">
                      <item.icon active={item.active}/>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
