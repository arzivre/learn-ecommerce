import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

interface ProductHeaderProps {
  onAddProduct: () => void
  className?: string
}

export function ProductHeader({ className, onAddProduct }: ProductHeaderProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">
            Manage products across all your shops
          </p>
        </div>
        <Button onClick={onAddProduct}>
          <Plus className="mr-2 size-4" />
          Add Product
        </Button>
      </div>
    </div>
  )
}
