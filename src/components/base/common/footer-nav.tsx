import { Link } from '@tanstack/react-router'

interface FooterNavProps {
  title: string
  links: {
    label: string
    to: string
  }[]
}

export function FooterNav({ title, links }: FooterNavProps) {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-medium text-foreground">{title}</h4>
      <nav className="flex flex-wrap items-center gap-3">
        {links.map((item, index) => (
          <div key={item.label} className="flex items-center gap-3">
            <Link
              to={item.to}
              className="text-sm transition-colors hover:text-foreground @4xl:text-base @7xl:text-xl"
            >
              {item.label}
            </Link>
            {index < links.length - 1 && (
              <span className="text-body-70">•</span>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}
