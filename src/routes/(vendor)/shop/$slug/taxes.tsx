import { mockTaxes } from '#/data/taxes'
import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import type { Taxes as Tax, TaxFormValues } from '@/types/taxes'
import ShopTaxesTemplate from '#/components/templates/vendor/shop-taxes-template'
import { AddTaxDialog } from '#/components/containers/vendors/taxes/add-tax-dialog'

export const Route = createFileRoute('/(vendor)/shop/$slug/taxes')({
  component: TaxesPage,
})

function TaxesPage() {
  const [taxes, setTaxes] = React.useState<Tax[]>(mockTaxes)
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  const handleAddTax = () => {
    setIsDialogOpen(true)
  }

  const handleTaxSubmit = (data: TaxFormValues) => {
    const newTax: Tax = {
      id: String(taxes.length + 1),
      name: data.name,
      rate: data.rate,
      country: data.country,
      state: data.state,
      zip: data.zip,
      priority: data.priority,
    }

    setTaxes([...taxes, newTax])
    console.log('Created tax:', newTax)
  }

  return (
    <>
      <ShopTaxesTemplate taxes={taxes} onAddTax={handleAddTax} />

      <AddTaxDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={handleTaxSubmit}
      />
    </>
  )
}
