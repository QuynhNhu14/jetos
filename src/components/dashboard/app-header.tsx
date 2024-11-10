"use client";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./app-sidebar";
import { IconNotification } from "../ui/icon";
import { UserNav } from "./user-nav";
import { Search } from "./search";

export function AppHeader({ items }: { items: SidebarItem[] }) {
  const pathname = usePathname();
  const title =
    items.find((item) => pathname === item.url)?.title ?? "Dashboard";

  return (
    <div className="border-b bg-foreground">
      <div className="flex h-19 items-center justify-between p-6">
        <h1 className="text-2xl font-semibold text-white">
          {title}
        </h1>
        <div className="ml-auto flex items-center  space-x-4">
          <Search />
          <IconNotification />
          <UserNav />
        </div>
      </div>
    </div>
  );
}
