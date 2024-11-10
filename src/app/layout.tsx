import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { IconNotification } from "@/components/ui/icon";
import { UserNav } from "@/components/dashboard/user-nav";
import { Search } from "@/components/dashboard/search";

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
          <AppSidebar />
          <div className="flex-1 overflow-hidden">
            <div className="border-b bg-foreground">
              <div className="flex h-19 items-center justify-between p-6">
                <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
                <div className="ml-auto flex items-center  space-x-4">
                  <Search />
                  <IconNotification />
                  <UserNav />
                </div>
              </div>
            </div>
            <main>{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
