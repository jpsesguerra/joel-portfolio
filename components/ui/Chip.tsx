import { cn } from '@/lib/utils'

interface ChipProps {
  children: React.ReactNode
  className?: string
}

export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-0.5 rounded-full bg-[var(--color-brand-primary-surface)] text-[var(--color-brand-primary)] font-mono text-[11px] leading-[16px] uppercase tracking-wide',
        className
      )}
    >
      {children}
    </span>
  )
}
