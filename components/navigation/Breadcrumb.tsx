import { cn } from '@/lib/utils'
import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-2', className)}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && (
            <svg
              className="w-3 h-3 flex-shrink-0 text-[var(--color-system-text-tertiary)]"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
            >
              <path
                d="M4.5 9L7.5 6 4.5 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {item.href && i < items.length - 1 ? (
            <Link
              href={item.href}
              className="font-mono text-[11px] leading-[16px] uppercase text-[var(--color-system-text-tertiary)] hover:text-[var(--color-brand-primary)] transition-colors duration-[150ms]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-mono text-[11px] leading-[16px] uppercase text-[var(--color-brand-primary)]">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
