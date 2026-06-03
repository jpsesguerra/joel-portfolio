'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HugeiconsIcon } from '@hugeicons/react'
import { Menu01Icon, Cancel01Icon } from '@hugeicons/core-free-icons'

const navItems = [
  { href: '/',               label: 'Home' },
  { href: '/case-studies',   label: 'Case Studies' },
  { href: '/design-systems', label: 'Design System' },
  { href: '/ai-projects',    label: 'AI Projects' },
  { href: '/about',          label: 'About Me' },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Top bar — mobile only */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-4 bg-[var(--color-system-background)] border-b border-[var(--color-system-border)]">
        <span className="text-[18px] leading-[26px] font-bold text-[var(--color-text-primary)]">Joel Esguerra</span>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="w-10 h-10 flex items-center justify-center text-[var(--color-text-primary)]"
        >
          <HugeiconsIcon icon={Menu01Icon} size={24} />
        </button>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 z-[60] w-[280px] bg-[var(--color-system-background)] shadow-modal flex flex-col transition-transform duration-[250ms] ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-4 h-[60px] border-b border-[var(--color-system-border)]">
          <span className="text-[18px] leading-[26px] font-bold text-[var(--color-text-primary)]">Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center text-[var(--color-text-primary)]"
          >
            <HugeiconsIcon icon={Cancel01Icon} size={24} />
          </button>
        </div>
        <nav className="flex-1 px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`px-3 py-2.5 rounded-md text-[14px] leading-[20px] font-medium text-[var(--color-text-primary)] transition-colors duration-[150ms] hover:bg-[var(--color-system-white)] ${pathname === item.href ? 'bg-[var(--color-system-white)] font-semibold' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
