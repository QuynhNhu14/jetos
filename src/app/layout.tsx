import {SidebarProvider} from "@/components/ui/sidebar";
import "./globals.css";
import { AppSidebar } from "@/components/dashboard/app-sidebar";

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
      <body suppressHydrationWarning={true} >
        <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </SidebarProvider>
      </body>
    </html>
  );
}
