// import CartItem from "@/components/base/store/cart/cart-item";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
// import { useCart } from "@/hooks/store/use-cart";
import { useCartStore } from '#/lib/store/cart-store'
import { ScrollArea } from '#/components/ui/scroll-area'
import { Separator } from '#/components/ui/separator'
import { Button } from '#/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { CartItem } from '#/components/base/store/cart/cart-item'

export function CartSheet() {
  //   const {
  //     items,
  //     totalItems,
  //     subtotal,
  //     isLoading,
  //     updateQuantity,
  //     removeItem,
  //     isUpdating,
  //     isRemoving,
  //   } = useCart();
  const { isOpen, setIsOpen, totalItems, items, subtotal } = useCartStore()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Cart ({totalItems})</SheetTitle>
        </SheetHeader>

        {items.length > 0 ? (
          <>
            <ScrollArea className="flex-1 px-6">
              <div className="divide-y">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4 py-6">
              <Separator />
              <div className="space-y-1.5 px-6">
                <div className="flex justify-between text-base font-medium">
                  <span>subtotal</span>
                  <span className="text-2xl font-semibold text-foreground">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Shipping and taxes calculated at checkout.
                </p>
              </div>
              <div className="grid gap-3 px-6">
                <Link to="/cart" onClick={() => setIsOpen(false)}>
                  <Button className="w-full" size="lg">
                    View Cart
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => setIsOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-2">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            <span className="text-lg font-medium text-muted-foreground">
              Your cart is empty
            </span>
            <Button variant="link" onClick={() => setIsOpen(false)}>
              Start Shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
