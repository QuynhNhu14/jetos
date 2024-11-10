"use client"
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
import { IconAnalytics, IconDashboard, IconMessage, IconPersonal, IconSetting, IconTransaction, IconWallet } from "../ui/icon";
import { usePathname } from "next/navigation";

type SidebarItem = {
  title: string
  url: string
  icon: React.FC<{ active?: boolean }>
  active?: boolean
}

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: IconDashboard,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: IconTransaction,
  },
  {
    title: "Wallet",
    url: "/wallet",
    icon: IconWallet,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: IconAnalytics,
  },
  {
    title: "Personal",
    url: "/personal",
    icon: IconPersonal,
  },
  {
    title: "Message",
    url: "/message",
    icon: IconMessage,
  },
  {
    title: "Setting",
    url: "/setting",
    icon: IconSetting,
  },
] as SidebarItem[]

export function AppSidebar() {
  const pathname = usePathname()
  items.forEach((item) => {
    item.active = pathname === item.url
  });

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
