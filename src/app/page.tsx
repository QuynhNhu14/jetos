import { Card } from "@/components/ui/card";
import { UserNav } from "@/components/dashboard/user-nav";
import { Search } from "@/components/dashboard/search";
import {
  IconBalance,
  IconExpense,
  IconIncome,
  IconNotification,
  IconSaving,
} from "@/components/ui/icon";

export default function DashboardPage() {
  return (
    <>
      <div className="hidden flex-col md:flex">
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
        <div className="flex-1 space-y-4 p-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="flex flex-row items-center gap-10 p-4 h-fit">
              <IconBalance />
              <div>
                <div className="text-sm text-sidebar-primary-foreground font-normal pb-3">
                  Balance
                </div>
                <div className="text-3xl font-medium">$41,210</div>
              </div>
            </Card>
            <Card className="flex flex-row items-center gap-10 p-4 h-fit">
              <IconIncome />
              <div>
                <div className="text-sm text-sidebar-primary-foreground font-normal pb-3">
                  Income
                </div>
                <div className="text-3xl font-medium">$41,210</div>
              </div>
            </Card>
            <Card className="flex flex-row items-center gap-10 p-4 h-fit">
              <IconExpense />
              <div>
                <div className="text-sm text-sidebar-primary-foreground font-normal pb-3">
                  Expenses
                </div>
                <div className="text-3xl font-medium">$41,210</div>
              </div>
            </Card>
            <Card className="flex flex-row items-center gap-10 p-4 h-fit">
              <IconSaving />
              <div>
                <div className="text-sm text-sidebar-primary-foreground font-normal pb-3">
                  Saving
                </div>
                <div className="text-3xl font-medium">$41,210</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
