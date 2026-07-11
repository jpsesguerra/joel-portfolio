'use client'
import { useState } from 'react'
import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  WebDesign01Icon,
  LaptopPhoneSyncIcon,
  BoundingBoxIcon,
  AiProgrammingIcon,
  GlassesIcon,
  TokenCircleIcon,
  Linkedin01Icon,
  DocumentAttachmentIcon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
} from '@hugeicons/core-free-icons'
import { Menu } from './Menu'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const JOEL_LOGO = '/rec-avatar.png'

const mainNavItems = [
  { href: '/',               label: 'Home',          icon: WebDesign01Icon },
  { href: '/case-studies',   label: 'Case Studies',  icon: LaptopPhoneSyncIcon },
  { href: '/design-systems', label: 'Design System', icon: BoundingBoxIcon },
  { href: '/ai-projects',    label: 'AI Projects',   icon: AiProgrammingIcon },
  { href: '/about',          label: 'About Me',      icon: GlassesIcon },
]

const footerNavItems = [
  { href: 'https://webflow.com/@joelpaolo', label: 'Live Web Design',      icon: TokenCircleIcon,        external: true },
  { href: 'https://www.linkedin.com/in/jpesguerra/', label: 'Connect on Linkedin', icon: Linkedin01Icon, external: true },
  { href: '/Joel Esguerra | Senior Product Designer — Resume.pdf', label: 'View My Resume', icon: DocumentAttachmentIcon, external: true },
]

export function SideNav() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      {/* Full nav — lg+ */}
      <nav
        className={cn(
          'hidden lg:flex flex-shrink-0 sticky top-0 h-screen flex-col border-r border-[var(--color-system-border)] bg-[var(--color-system-background)] relative transition-[width] duration-300 ease-in-out',
          collapsed ? 'w-20' : 'w-60'
        )}
      >
        <AnimatedIdentityBlock collapsed={collapsed} />
        <div className="flex-1 px-3 py-5 flex flex-col gap-2 overflow-y-auto overflow-x-hidden">
          {mainNavItems.map((item) => (
            <Menu key={item.href} href={item.href} icon={<HugeiconsIcon icon={item.icon} size={20} />} label={item.label} collapsed={collapsed} />
          ))}
        </div>
        <div className="px-3 pt-6 pb-[44px] flex flex-col gap-3 opacity-60 overflow-hidden">
          {footerNavItems.map((item) => (
            <Menu
              key={item.label}
              href={item.href}
              icon={<HugeiconsIcon icon={item.icon} size={20} />}
              label={item.label}
              collapsed={collapsed}
              external={item.external}
            />
          ))}
        </div>

        <CollapseToggle collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      </nav>

      {/* Collapsed icon-only nav — md (768–1024px) */}
      <nav className="hidden md:flex lg:hidden w-12 flex-shrink-0 sticky top-0 h-screen flex-col border-r border-[var(--color-system-border)] bg-[var(--color-system-background)]">
        <IdentityBlock collapsed />
        <div className="flex-1 flex flex-col items-center gap-1 py-2">
          {mainNavItems.map((item) => (
            <CollapsedMenuItem key={item.href} href={item.href} icon={<HugeiconsIcon icon={item.icon} size={20} />} label={item.label} />
          ))}
        </div>
        <div className="flex flex-col items-center gap-1 pb-4 opacity-60">
          {footerNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              title={item.label}
              aria-label={item.label}
              className="w-9 h-9 flex items-center justify-center rounded-md text-[var(--color-text-tertiary)] transition-colors duration-[150ms] hover:bg-[rgba(255,255,255,0.60)]"
            >
              <HugeiconsIcon icon={item.icon} size={20} />
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}

function IdentityBlock({ collapsed }: { collapsed: boolean }) {
  if (collapsed) {
    return (
      <a href="/" className="flex justify-center pt-4 pb-3 hover:opacity-80 transition-opacity duration-[150ms]">
        <div className="w-8 h-8 rounded-[3.2px] overflow-hidden">
          <Image src={JOEL_LOGO} alt="Joel Esguerra" width={48} height={48} priority className="w-full h-full object-cover" />
        </div>
      </a>
    )
  }
  return (
    <a href="/" className="h-[80px] flex items-center gap-[9px] px-3 border-b border-[var(--color-system-border)] hover:bg-[var(--color-system-white)] transition-colors duration-[150ms]">
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-[4px] lg:rounded-[4.8px] overflow-hidden flex-shrink-0">
        <Image src={JOEL_LOGO} alt="Joel Esguerra" width={48} height={48} priority className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[20px] leading-[28px] text-[var(--color-text-primary)] font-bold">Joel Esguerra</p>
        <p className="text-[12px] leading-[18px] font-mono text-[var(--color-text-secondary)] uppercase">SR.Product Designer</p>
      </div>
    </a>
  )
}

function AnimatedIdentityBlock({ collapsed }: { collapsed: boolean }) {
  return (
    <a
      href="/"
      className="h-[80px] flex items-center px-3 gap-0 border-b border-[var(--color-system-border)] hover:bg-[var(--color-system-white)] transition-colors duration-[150ms]"
    >
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-[4px] lg:rounded-[4.8px] overflow-hidden flex-shrink-0">
        <Image src={JOEL_LOGO} alt="Joel Esguerra" width={48} height={48} priority className="w-full h-full object-cover" />
      </div>
      <div
        className={cn(
          'flex flex-col justify-center overflow-hidden whitespace-nowrap transition-[max-width,opacity,margin-left] duration-300 ease-in-out',
          collapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[160px] opacity-100 ml-[9px]'
        )}
      >
        <p className="text-[20px] leading-[28px] text-[var(--color-text-primary)] font-bold">Joel Esguerra</p>
        <p className="text-[12px] leading-[18px] font-mono text-[var(--color-text-secondary)] uppercase">SR.Product Designer</p>
      </div>
    </a>
  )
}

function CollapseToggle({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      aria-pressed={collapsed}
      className="group/toggle absolute -right-3 top-1/2 -translate-y-1/2 h-24 w-6 flex items-center justify-center cursor-pointer z-20"
    >
      <span
        aria-hidden
        className={cn(
          'h-8 w-px rounded-full bg-[var(--color-system-border)] transition-transform duration-200 ease-out group-hover/toggle:bg-[var(--color-text-tertiary)]',
          collapsed ? 'group-hover/toggle:translate-x-1' : 'group-hover/toggle:-translate-x-1'
        )}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-full top-1/2 ml-2 -translate-y-1/2 flex items-center gap-1.5 whitespace-nowrap rounded-md bg-[#1a1a1a] px-3 py-1.5 text-[13px] font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 ease-out group-hover/toggle:opacity-100"
      >
        <HugeiconsIcon icon={collapsed ? ArrowRight01Icon : ArrowLeft01Icon} size={14} />
        {collapsed ? 'Expand' : 'Collapse'}
      </span>
    </button>
  )
}

function CollapsedMenuItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  const pathname = usePathname()
  const isSelected = pathname === href

  return (
    <a
      href={href}
      title={label}
      aria-label={label}
      className={`w-9 h-9 flex items-center justify-center rounded-md text-[var(--color-text-tertiary)] transition-colors duration-[150ms] hover:bg-[rgba(255,255,255,0.60)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-primary)] ${isSelected ? 'bg-[var(--color-system-white)] shadow-[0_1px_3px_rgba(0,0,0,0.06)]' : ''}`}
    >
      {icon}
    </a>
  )
}
