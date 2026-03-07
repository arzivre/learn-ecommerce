import { Mail, Phone } from 'lucide-react'

export function HelpSection() {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Need help?</h3>
      <div className="space-y-2">
        <a
          href="mailto:customercare@asoom.com"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Mail className="h-4 w-4" />
          <span>customercare@asoom.com</span>
        </a>
        <a
          href="tel:+18256654"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Phone className="h-4 w-4" />
          <span>+1 8256 6546</span>
        </a>
      </div>
    </div>
  )
}
