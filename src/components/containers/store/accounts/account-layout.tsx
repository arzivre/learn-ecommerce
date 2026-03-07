import React from 'react'
import { AccountSidebar } from './account-sidebar'

interface AccountLayoutProps {
  children: React.ReactNode
}

export function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <div className="@container container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8 @2xl:flex-row">
        <AccountSidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
