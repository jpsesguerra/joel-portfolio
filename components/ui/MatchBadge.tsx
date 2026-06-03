import { cn } from '@/lib/utils'

type MatchVariant = 'strong' | 'review' | 'no-match'

interface MatchBadgeProps {
  variant: MatchVariant
  label?: string
}

const config: Record<MatchVariant, { label: string; bg: string; text: string }> = {
  strong:     { label: 'Strong',   bg: 'bg-[var(--color-system-success-surface)]',  text: 'text-[var(--color-system-success)]' },
  review:     { label: 'Review',   bg: 'bg-[var(--color-system-warning-surface)]',  text: 'text-[var(--color-system-warning)]' },
  'no-match': { label: 'No Match', bg: 'bg-[var(--color-system-error-surface)]',    text: 'text-[var(--color-system-error)]' },
}

export function MatchBadge({ variant, label }: MatchBadgeProps) {
  const { label: defaultLabel, bg, text } = config[variant]
  return (
    <span className={cn('inline-flex items-center gap-1 px-2 py-0.5 rounded-sm font-mono text-[11px] leading-[16px] uppercase', bg, text)}>
      <span>●</span>
      {label ?? defaultLabel}
    </span>
  )
}
