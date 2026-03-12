interface ShopShippingTemplateProps {
  shippingMethods: ShippingMethod[]
  onAddShipping: () => void
}

export function ShopShippingTemplate({
  shippingMethods,
  onAddShipping,
}: ShopShippingTemplateProps) {
  return (
    <div className="space-y-6">
      <ShippingHeader onAddShipping={onAddShipping} />
      <ShippingTable shippingMethods={shippingMethods} />
    </div>
  )
}
