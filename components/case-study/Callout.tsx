import { cn } from '@/lib/utils'

interface CalloutProps {
  variant: 'info' | 'warning'
  children: React.ReactNode
  className?: string
}

export function Callout({ variant, children, className }: CalloutProps) {
  return (
    <div
      className={cn(
        'my-6 rounded-md pl-4 pr-5 py-4 border-l-[3px]',
        variant === 'info'
          ? 'bg-[var(--color-brand-primary-surface)] border-[var(--color-brand-primary)]'
          : 'bg-[var(--color-system-warning-surface)] border-[var(--color-system-warning)]',
        className
      )}
    >
      <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">{children}</p>
    </div>
  )
}
