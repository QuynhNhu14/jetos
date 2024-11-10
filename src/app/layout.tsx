import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import { AppSidebar, SidebarItem } from "@/components/dashboard/app-sidebar";
import { IconAnalytics, IconDashboard, IconMessage, IconPersonal, IconSetting, IconTransaction, IconWallet } from "@/components/ui/icon";
import { AppHeader } from "@/components/dashboard/app-header";

// Menu items.
const defaultItems = [
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <SidebarProvider>
          <AppSidebar items={defaultItems} />
          <div className="flex-1 overflow-hidden">
            <AppHeader items={defaultItems} />
            <main>{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
