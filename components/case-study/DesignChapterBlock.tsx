import { cn } from '@/lib/utils'

interface DesignChapterBlockProps {
  badgeNumber: string
  title: string
  children: React.ReactNode
  className?: string
}

export function DesignChapterBlock({ badgeNumber, title, children, className }: DesignChapterBlockProps) {
  return (
    <div className={cn('bg-[var(--color-system-white)] rounded-lg border border-[var(--color-system-border)]', className)}>
      <div className="flex items-center gap-4 px-10 py-7 border-b border-[var(--color-system-border)]">
        <span className="font-mono text-[11px] leading-[16px] font-semibold uppercase text-[var(--color-brand-primary)] bg-[var(--color-brand-primary-surface)] border border-[var(--color-brand-primary)]/30 px-2.5 py-1 rounded-sm">
          {badgeNumber}
        </span>
        <h3 className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">{title}</h3>
      </div>
      <div className="p-10">
        {children}
      </div>
    </div>
  )
}
