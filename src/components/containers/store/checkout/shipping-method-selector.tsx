import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useCartStore } from '@/lib/store/cart-store'

export function ShippingMethodSelector() {
  const { shippingMethod, setShippingMethod } = useCartStore()
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Shipping Method</h2>

      <RadioGroup
        value={shippingMethod?.id}
        onValueChange={() => {
          //   const selected = availableMethods.find((m) => m.id === value)
          //   if (selected) {
          //     setShippingMethod({
          //       id: selected.id,
          //       name: selected.name,
          //       price: Number(selected.price),
          //       duration: selected.duration,
          //     })
          //   }
          setShippingMethod(null)
        }}
        className="grid gap-4"
      >
        <div className="relative flex items-center space-x-3 rounded-lg border border-input p-4 transition-colors hover:border-primary/50 has-data-state-checked:border-primary">
          <RadioGroupItem value="free" id="free" />
          <Label
            htmlFor="free"
            className="flex flex-1 cursor-pointer items-center justify-between"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium">Free Shipping</p>
              <p className="text-xs text-muted-foreground"> 7-20 Days</p>
            </div>
            <p className="text-lg font-semibold">$0</p>
          </Label>
        </div>

        <div className="relative flex items-center space-x-3 rounded-lg border border-input p-4 transition-colors hover:border-primary/50 has-data-[state=checked]:border-primary">
          <RadioGroupItem value="express" id="express" />
          <Label
            htmlFor="express"
            className="flex flex-1 cursor-pointer items-center justify-between"
          >
            <div className="space-y-1">
              <p className="text-sm font-medium">Express Shipping</p>
              <p className="text-xs text-muted-foreground">1-3 Days</p>
            </div>
            <p className="text-lg font-semibold">$9</p>
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}
