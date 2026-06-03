import { cn } from '@/lib/utils'

interface LearningRowProps {
  title: string
  body: string
  isLast?: boolean
}

export function LearningRow({ title, body, isLast = false }: LearningRowProps) {
  return (
    <div className={cn('py-5 px-6 grid grid-cols-[1fr_2fr] gap-8', !isLast && 'border-b border-[var(--color-system-border)]')}>
      <p className="text-[14px] leading-[20px] font-semibold text-[var(--color-system-text-primary)]">{title}</p>
      <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">{body}</p>
    </div>
  )
}
