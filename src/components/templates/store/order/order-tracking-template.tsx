import { OrderSearchForm } from '@/components/base/store/order/order-search-form'
import { OrderStatusTimeline } from '@/components/base/store/order/order-status-timeline'
import { OrderTrackingSummary } from '@/components/containers/store/order/order-tracking-summary'
import { ShippingUpdatesList } from '@/components/containers/store/order/shipping-updates-list'
import { TrackingDetailsCard } from '@/components/containers/store/order/tracking-details-card'
import { mockTrackingData } from '@/data/order-tracking'
import { Package } from 'lucide-react'
import { useState } from 'react'

export function OrderTrackingTemplate() {
  const [isSearching, setIsSearching] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = (_orderId: string) => {
    setIsSearching(true)
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false)
      setHasSearched(true)
    }, 1000)
  }

  return (
    <div className="@container container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
          <Package className="size-8 text-primary" />
        </div>
        <h1 className="mb-2 text-3xl font-bold">Track Your Order!</h1>
        <p className="text-muted-foreground">
          Enter your order ID to get real-time tracking updates
        </p>
      </div>

      <div className="mb-8">
        <OrderSearchForm onSearch={handleSearch} isLoading={isSearching} />
      </div>

      {hasSearched && (
        <div className="space-y-8">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Order Status</h2>
            <OrderStatusTimeline stages={mockTrackingData.stages} />
          </div>

          {/* Tracking Details and Summary Grid */}
          <div className="grid gap-6 @5xl:grid-cols-3">
            <div className="space-y-6 @5xl:col-span-2">
              <TrackingDetailsCard
                carrier={mockTrackingData.carrier}
                trackingNumber={mockTrackingData.trackingNumber}
                currentLocation={mockTrackingData.currentLocation}
                estimatedDelivery={mockTrackingData.estimatedDelivery}
                packageInfo={mockTrackingData.packageInfo}
              />
              <ShippingUpdatesList updates={mockTrackingData.updates} />
            </div>
            <div>
              <OrderTrackingSummary
                orderId={mockTrackingData.orderId}
                orderDate={mockTrackingData.orderDate}
                itemsCount={mockTrackingData.itemsCount}
                total={mockTrackingData.total}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
