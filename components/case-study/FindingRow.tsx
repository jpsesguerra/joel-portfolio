import { cn } from '@/lib/utils'

interface FindingRowProps {
  number: string
  title: string
  body: string
  isLast?: boolean
}

export function FindingRow({ number, title, body, isLast = false }: FindingRowProps) {
  return (
    <div className={cn('py-5 px-6', !isLast && 'border-b border-[var(--color-system-border)]')}>
      <div className="flex gap-4">
        <span className="font-mono text-[11px] leading-[16px] uppercase text-[var(--color-brand-primary)] flex-shrink-0 pt-0.5">{number}</span>
        <div className="flex flex-col gap-1">
          <p className="text-[14px] leading-[20px] font-semibold text-[var(--color-system-text-primary)]">{title}</p>
          <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">{body}</p>
        </div>
      </div>
    </div>
  )
}
