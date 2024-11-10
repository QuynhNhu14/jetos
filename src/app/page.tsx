import { Card } from "@/components/ui/card";
import {
  IconBalance,
  IconExpense,
  IconIncome,
  IconSaving,
} from "@/components/ui/icon";

export default function DashboardPage() {
  return (
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
  );
}
