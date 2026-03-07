import { Button } from '@/components/ui/button'
import { ShoppingCart, Star, Trash2 } from 'lucide-react'

export function WishlistItemCard({ item }: any) {
  return (
    <div className="group @container relative flex flex-col gap-4 rounded-lg border-b border-dashed border-muted py-6 transition-colors last:border-0 hover:bg-muted @2xl:flex-row @2xl:items-center @2xl:p-4 @2xl:hover:bg-muted">
      <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-lg border bg-muted @2xl:w-24">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <h3 className="text-base leading-none font-semibold tracking-tight">
              {item.name}
            </h3>
            <p className="text-sm text-muted-foreground">{item.shopName}</p>
          </div>
          <div className="flex flex-col items-end gap-1 @2xl:hidden">
            <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
            {item.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                ${item.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {item.rating && (
          <div className="flex items-center gap-1">
            <Star className="size-3.5 fill-primary text-primary" />
            <span className="text-sm font-medium">{item.rating}</span>
            <span className="text-xs text-muted-foreground">(120 reviews)</span>
          </div>
        )}
      </div>

      <div className="flex w-full flex-row items-center justify-between gap-4 @2xl:w-auto @2xl:flex-col @2xl:items-end @2xl:gap-3">
        <div className="hidden flex-col items-end gap-0.5 @2xl:flex">
          <span className="text-xl font-bold">${item.price.toFixed(2)}</span>
          {item.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${item.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex w-full items-center gap-2 @2xl:w-auto">
          <Button size="sm" className="flex-1 gap-2 @2xl:flex-none">
            <ShoppingCart className="size-4" />
            Add to Cart
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-destructive"
            // onClick={() => removeItem(item.id)}
            title="Remove from wishlist"
          >
            <Trash2 className="size-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
