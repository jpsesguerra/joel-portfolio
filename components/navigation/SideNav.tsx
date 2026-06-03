'use client'
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
} from '@hugeicons/core-free-icons'
import { Menu } from './Menu'
import { usePathname } from 'next/navigation'

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
  return (
    <>
      {/* Full nav — lg+ */}
      <nav className="hidden lg:flex w-60 flex-shrink-0 sticky top-0 h-screen flex-col border-r border-[var(--color-system-border)] bg-[var(--color-system-background)]">
        <IdentityBlock collapsed={false} />
        <div className="flex-1 p-5 flex flex-col gap-2 overflow-y-auto">
          {mainNavItems.map((item) => (
            <Menu key={item.href} href={item.href} icon={<HugeiconsIcon icon={item.icon} size={20} />} label={item.label} />
          ))}
        </div>
        <div className="px-6 pt-6 pb-[44px] flex flex-col gap-3 opacity-60">
          {footerNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-[14px] leading-[20px] font-medium text-[var(--color-system-text-tertiary)] transition-colors duration-[150ms] hover:bg-[rgba(255,255,255,0.60)]"
            >
              <span className="flex-shrink-0 w-5 h-5"><HugeiconsIcon icon={item.icon} size={20} /></span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
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
          <img src={JOEL_LOGO} alt="Joel Esguerra" className="w-full h-full object-cover" />
        </div>
      </a>
    )
  }
  return (
    <a href="/" className="h-[80px] flex items-center gap-[9px] px-3 border-b border-[var(--color-system-border)] hover:bg-[var(--color-system-white)] transition-colors duration-[150ms]">
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-[4px] lg:rounded-[4.8px] overflow-hidden flex-shrink-0">
        <img src={JOEL_LOGO} alt="Joel Esguerra" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[20px] leading-[28px] text-[var(--color-text-primary)] font-bold">Joel Esguerra</p>
        <p className="text-[12px] leading-[18px] font-mono text-[var(--color-text-secondary)] uppercase">SR.Product Designer</p>
      </div>
    </a>
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
