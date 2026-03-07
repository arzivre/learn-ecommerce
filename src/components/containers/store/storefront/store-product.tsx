import { NotFound } from '@/components/base/empty/not-found'
import { ProductCard } from '@/components/base/products/product-card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { mockProducts } from '@/data/products'
import { PackageOpen } from 'lucide-react'
import { useState } from 'react'

interface StoreProductsProps {
  storeName: string
}

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'popular', label: 'Most Popular' },
]

export function StoreProducts({ storeName }: StoreProductsProps) {
  const [sortBy, setSortBy] = useState('newest')

  // Filter products by store name
  // In a real app, products would have a storeId field for direct matching
  const storeProducts = mockProducts.filter(
    (product) => product.store.name === storeName,
  )

  // Sort products
  const sortedProducts = [...storeProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price.current - b.price.current
      case 'price-high':
        return b.price.current - a.price.current
      case 'rating':
        return b.rating.average - a.rating.average
      case 'popular':
        return b.rating.count - a.rating.count
      default:
        return 0
    }
  })

  if (storeProducts.length === 0) {
    return (
      <NotFound
        title="No Products Yet"
        description="This store hasn't listed any products yet. Check back soon!"
        icon={<PackageOpen className="size-12 text-muted-foreground" />}
        className="py-12"
      />
    )
  }

  return (
    <div className="space-y-6">
      {/* Header with count and sort */}
      <div className="flex flex-col items-start justify-between gap-4 @2xl:flex-row @2xl:items-center">
        <div className="@2xl:items-center">
          <h2 className="text-xl font-semibold">
            Products ({storeProducts.length})
          </h2>
          <p className="text-sm text-muted-foreground">
            Browse all products from {storeName}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-45">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 @2xl:grid-cols-2 @5xl:grid-cols-3">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
