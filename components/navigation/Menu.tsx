'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuProps {
  href: string
  icon: React.ReactNode
  label: string
  className?: string
}

export function Menu({ href, icon, label, className }: MenuProps) {
  const pathname = usePathname()
  const isSelected = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 px-3 py-2 rounded-md text-[14px] leading-[20px] font-medium text-[var(--color-system-text-tertiary)] transition-colors duration-[150ms]',
        'hover:bg-[rgba(255,255,255,0.60)]',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)]',
        isSelected && 'bg-[var(--color-system-white)] shadow-[0_1px_3px_rgba(0,0,0,0.06)]',
        className
      )}
    >
      <span className="flex-shrink-0 w-5 h-5">{icon}</span>
      <span>{label}</span>
    </Link>
  )
}
