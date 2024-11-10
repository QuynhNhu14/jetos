import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

export function Search() {
  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px] pr-10"
      />
      <SearchIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sidebar-primary-foreground" />
    </div>
  )
}