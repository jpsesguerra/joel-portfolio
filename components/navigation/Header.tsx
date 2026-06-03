import { NavActionMenu } from './NavActionMenu'

interface HeaderProps {
  pageTitle: string
}

export function Header({ pageTitle }: HeaderProps) {
  return (
    <header className="h-20 flex items-center justify-between px-4 sm:px-6 md:px-10 gap-4 border-b border-[var(--color-system-border)] sticky top-0 z-50 bg-[var(--color-system-background)]">
      <h1 className="text-[clamp(14px,2vw,24px)] leading-[32px] text-[var(--color-text-primary)] font-bold whitespace-nowrap truncate min-w-0">{pageTitle}</h1>
      <NavActionMenu />
    </header>
  )
}
