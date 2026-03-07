import { BreadcrumbNav } from '@/components/base/common/breadcrumb-nav'
import { StoreFilterSidebar } from '@/components/containers/store/storefront/store-filter-sidebar'
import { StoreList } from '@/components/containers/store/storefront/store-list'

export function StoresListingTemplate() {
  const storesSteps = [
    { label: 'Home', href: '/' },
    { label: 'Stores', isActive: true },
  ] as const
  return (
    <div className="@container container mx-auto min-h-screen bg-background px-4 py-8">
      <BreadcrumbNav items={storesSteps} className="mb-4" />

      <div className="mb-8">
        <h1 className="mb-3 text-3xl font-bold tracking-tight @2xl:text-4xl">
          All Stores
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover and shop from our verified sellers
        </p>
      </div>

      <div className="flex flex-col gap-8 @2xl:flex-row">
        <aside className="w-full shrink-0 @2xl:w-72">
          <div className="rounded-xl border bg-card p-6 shadow-sm @2xl:sticky @2xl:top-4">
            <StoreFilterSidebar />
          </div>
        </aside>

        {/* Store List */}
        <main className="min-w-0 flex-1">
          <StoreList />
        </main>
      </div>
    </div>
  )
}
