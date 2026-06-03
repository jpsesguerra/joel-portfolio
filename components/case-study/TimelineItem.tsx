import { cn } from '@/lib/utils'

interface TimelineItemProps {
  variant: 'default' | 'pivot'
  tag: string
  title: string
  body: string
  isLast?: boolean
}

export function TimelineItem({ variant, tag, title, body, isLast = false }: TimelineItemProps) {
  const isPivot = variant === 'pivot'
  return (
    <div className="flex gap-6 relative">
      {/* Rail */}
      {!isLast && (
        <div className="absolute left-[5px] top-3 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-brand-primary)] to-[var(--color-brand-primary)]/10" />
      )}
      {/* Dot */}
      <div className="flex-shrink-0 mt-1 relative z-10">
        {isPivot ? (
          <div className="w-4 h-4 rounded-full bg-[var(--color-system-warning)] ring-2 ring-[var(--color-system-warning)]/30" />
        ) : (
          <div className="w-3 h-3 rounded-full bg-[var(--color-brand-primary)]" />
        )}
      </div>
      {/* Content */}
      <div className={cn('pb-8', isLast && 'pb-0')}>
        <p className={cn('font-mono text-[10px] uppercase mb-1', isPivot ? 'text-[var(--color-system-warning)]' : 'text-[var(--color-system-text-tertiary)]')}>{tag}</p>
        <p className="text-[14px] leading-[20px] font-semibold text-[var(--color-system-text-primary)] mb-1">{title}</p>
        <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">{body}</p>
      </div>
    </div>
  )
}
