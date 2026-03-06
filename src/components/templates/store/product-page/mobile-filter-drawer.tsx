import { Filter } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import type { FilterState } from '@/lib/store/product-filters-store'
import { FilterSidebar } from './filter-sidebar'

interface MobileFilterDrawerProps {
  filters: FilterState
  updateFilter: (key: keyof FilterState, value: any) => void
  totalResults: number
  className?: string
}

export function MobileFilterDrawer({
  filters,
  updateFilter,
  totalResults,
  className,
}: MobileFilterDrawerProps) {
  const [open, setOpen] = React.useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className={cn('flex gap-2 @4xl:hidden', className)}
        >
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] overflow-y-auto @2xl:w-[400px]"
      >
        <SheetHeader className="mb-4">
          <SheetTitle>Filters ({totalResults})</SheetTitle>
        </SheetHeader>

        <FilterSidebar filters={filters} updateFilter={updateFilter} />

        <div className="sticky bottom-0 mt-6 border-t bg-background p-4">
          <Button className="w-full" onClick={() => setOpen(false)}>
            Show {totalResults} Results
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
