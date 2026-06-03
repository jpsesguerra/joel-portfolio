'use client'
import { cn } from '@/lib/utils'

interface RecommendationCardProps {
  quote: string
  name: string
  role: string
  company: string
  className?: string
}

export function RecommendationCard({ quote, name, role, company, className }: RecommendationCardProps) {
  return (
    <div
      className={cn(
        'w-[360px] min-h-[506px] bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md p-6 flex flex-col justify-between cursor-default transition-shadow duration-[150ms] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]',
        className
      )}
    >
      <p className="text-[16px] leading-[24px] text-[var(--color-system-text-secondary)] italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6">
        <p className="text-[14px] leading-[20px] font-semibold text-[var(--color-system-text-primary)]">{name}</p>
        <p className="text-[12px] leading-[18px] text-[var(--color-system-text-tertiary)]">{role} · {company}</p>
      </div>
    </div>
  )
}
