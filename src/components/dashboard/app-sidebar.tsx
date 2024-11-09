import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
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

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Transactions",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Walltes",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Analytics",
    url: "#",
    icon: Search,
  },
  {
    title: "Personal",
    url: "#",
    icon: Settings,
  },
  {
    title: "Message",
    url: "#",
    icon: Settings,
  },
  {
    title: "Setting",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent >
        <SidebarGroup className="items-center top-6">
          <SidebarGroupLabel >
            <Image src="/logo.png" alt="logo" width={200} height={45}/>
         </SidebarGroupLabel>
          <SidebarGroupContent className="mt-6 ml-8">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="mr-2" />
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
