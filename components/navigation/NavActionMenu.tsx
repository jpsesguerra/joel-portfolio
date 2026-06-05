'use client'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  MailAdd01Icon,
  Linkedin01Icon,
  Sun01Icon,
  Moon01Icon,
} from '@hugeicons/core-free-icons'
import { useTheme } from '@/components/ThemeProvider'
import { CopyEmailButton } from '@/components/CopyEmailButton'

export function NavActionMenu() {
  const { theme, toggle } = useTheme()

  return (
    <div className="flex items-center gap-4">
      {/* LinkedIn — hidden on mobile */}
      <a
        href="https://www.linkedin.com/in/jpesguerra/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hidden sm:flex w-5 h-6 items-center justify-center opacity-80 text-[var(--color-text-primary)]"
      >
        <HugeiconsIcon icon={Linkedin01Icon} size={20} />
      </a>
      {/* Email icon — always visible */}
      <CopyEmailButton
        aria-label="Email"
        className="w-5 h-6 flex items-center justify-center opacity-80 text-[var(--color-text-primary)]"
      >
        <HugeiconsIcon icon={MailAdd01Icon} size={20} />
      </CopyEmailButton>
      {/* Theme toggle — always visible */}
      <button
        onClick={toggle}
        aria-label="Toggle dark mode"
        className="w-8 h-8 flex items-center justify-center rounded-md bg-[rgba(0,163,246,0.12)] opacity-80 text-[var(--color-brand-primary)] transition-colors duration-[150ms]"
      >
        <HugeiconsIcon icon={theme === 'dark' ? Sun01Icon : Moon01Icon} size={20} />
      </button>
      {/* CTA button — hidden on mobile */}
      <CopyEmailButton className="hidden sm:flex items-center justify-center px-3 py-[7px] rounded-md bg-[var(--color-brand-primary)] border border-[var(--color-system-border)] text-white font-mono text-[14px] leading-[22px] uppercase whitespace-nowrap hover:opacity-90 transition-opacity duration-[150ms]">
        Let&apos;s Connect
      </CopyEmailButton>
    </div>
  )
}
