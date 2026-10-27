import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ShoppingCart } from 'lucide-react'

interface CollectionItemProps {
  image: string
  title: string
  category: string
  fit: string
  price: string
  className?: string
  onAddToCart?: () => void
}
export function CollectionItem({
  image,
  title,
  category,
  fit,
  price,
  className,
  onAddToCart,
}: CollectionItemProps) {
  return (
    <div className={cn('relativea border-dashed p-5 @6xl:p-7.5', className)}>
      <div className="overflow-hidden rounded-t-2xl">
        <img src={image} alt={title} className="h-96.5 w-full object-cover" />
      </div>

      <div className="mt-5 flex items-center justify-start gap-3 @6xl:mt-7.5 @6xl:justify-between">
        <span className="rounded-full border-2 border-dashed border-body-15 bg-body-10 px-4 py-2 text-lg text-body-70">
          {category}
        </span>
        <Button
          variant="secondary"
          size="lg"
          type="button"
          className="hidden @6xl:inline-flex"
          onClick={onAddToCart}
        >
          Shop Now
          <ShoppingCart />
        </Button>
      </div>
      <div className="mt-3 space-y-3.5">
        <h4 className="font-mono text-lg font-medium">{title}</h4>
        <p className="font-mono text-sm text-muted-foreground">
          Fit: <span className="font-medium text-body-80">{fit}</span> Price:{' '}
          <span className="font-medium text-body-80">{price}</span>
        </p>
        <Button
          variant="secondary"
          size="lg"
          type="button"
          className="w-full @6xl:hidden"
          onClick={onAddToCart}
        >
          Shop Now
          <ShoppingCart />
        </Button>
      </div>
    </div>
  )
}
