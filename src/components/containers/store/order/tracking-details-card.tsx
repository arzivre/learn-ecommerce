import { Calendar, MapPin, Package, Truck } from 'lucide-react'

interface TrackingDetailsCardProps {
  carrier: string
  trackingNumber: string
  currentLocation: string
  estimatedDelivery: string
  packageInfo?: {
    weight?: string
    dimensions?: string
  }
}

export function TrackingDetailsCard({
  carrier,
  trackingNumber,
  currentLocation,
  estimatedDelivery,
  packageInfo,
}: TrackingDetailsCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold">Tracking Details</h3>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Truck className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-base font-medium text-foreground">Carrier</p>
            <p className="text-sm text-muted-foreground">{carrier}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Package className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-base font-medium text-foreground">
              Tracking Number
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              {trackingNumber}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-base font-medium text-foreground">
              Current Location
            </p>
            <p className="text-sm text-muted-foreground">{currentLocation}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Calendar className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-base font-medium text-foreground">
              Estimated Delivery
            </p>
            <p className="text-sm text-muted-foreground">{estimatedDelivery}</p>
          </div>
        </div>

        {packageInfo && (
          <div className="border-t pt-4">
            <p className="mb-2 text-base font-medium text-foreground">
              Package Information
            </p>
            <div className="space-y-1 text-sm text-muted-foreground">
              {packageInfo.weight && <p>Weight: {packageInfo.weight}</p>}
              {packageInfo.dimensions && (
                <p>Dimensions: {packageInfo.dimensions}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
