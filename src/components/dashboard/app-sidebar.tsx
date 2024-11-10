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
import { usePathname } from "next/navigation";

export type SidebarItem = {
  title: string
  url: string
  icon: React.FC<{ active?: boolean }>
  active?: boolean
}

export function AppSidebar({items}: {items: SidebarItem[]}) {
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
