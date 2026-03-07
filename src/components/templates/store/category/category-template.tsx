import { BreadcrumbNav } from '@/components/base/common/breadcrumb-nav'
import { CategoryGrid } from '@/components/containers/store/category/category-grid'
import { SidebarCategoryTree } from '@/components/containers/store/category/sidebar-category-tree'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getRootCategories } from '@/lib/helper/categories'

export function CategoryTemplate() {
  const rootCategories = getRootCategories()
  const featuredCategories = rootCategories.filter((cat) => cat.featured)

  const cartSteps = [
    { label: 'Home', href: '/' },
    { label: 'Categories', isActive: true },
  ] as const

  return (
    <div className="@container container mx-auto px-4 py-8">
      <BreadcrumbNav items={cartSteps} className="mb-4" />
      <h1 className="mt-4 text-3xl font-bold tracking-tight">All Categories</h1>
      <p className="mt-2 mb-8 text-muted-foreground">
        Browse our wide range of product categories
      </p>

      <div className="grid gap-8 @5xl:grid-cols-12">
        {/* Sidebar - Categories Tree */}
        <div className="@5xl:col-span-3">
          <SidebarCategoryTree />
        </div>

        {/* Main Content */}
        <div className="space-y-8 @5xl:col-span-9">
          {featuredCategories.length > 0 && (
            <div>
              <h2 className="mb-4 text-xl font-semibold">
                Featured Categories
              </h2>
              <CategoryGrid
                categories={featuredCategories}
                variant="featured"
                columns={{
                  default: 1,
                  sm: 2,
                  md: 3,
                  lg: 3,
                  xl: 3,
                }}
              />
            </div>
          )}

          <Separator />

          {/* All Categories */}
          <Tabs defaultValue="grid" className="w-full">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">All Categories</h2>
              <TabsList>
                <TabsTrigger value="grid">Grid View</TabsTrigger>
                <TabsTrigger value="list">List View</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="grid" className="mt-6">
              <CategoryGrid
                categories={rootCategories}
                variant="default"
                columns={{
                  default: 2,
                  sm: 3,
                  md: 4,
                  lg: 4,
                  xl: 5,
                }}
              />
            </TabsContent>

            <TabsContent value="list" className="mt-6">
              <CategoryGrid
                categories={rootCategories}
                variant="list"
                columns={{
                  default: 1,
                  sm: 1,
                  md: 2,
                  lg: 2,
                  xl: 2,
                }}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
