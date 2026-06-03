'use client'
import { cn } from '@/lib/utils'
import { Chip } from '@/components/ui/Chip'

interface AIProjectCardProps {
  title: string
  description: string
  chips?: string[]
  className?: string
}

export function AIProjectCard({ title, description, chips = [], className }: AIProjectCardProps) {
  return (
    <div
      className={cn(
        'w-[360px] bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md overflow-hidden cursor-pointer transition-shadow duration-[200ms] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]',
        className
      )}
    >
      <div className="h-48 bg-[var(--color-system-background-02)]" />
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          {chips.map((chip) => <Chip key={chip}>{chip}</Chip>)}
        </div>
        <h3 className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">{title}</h3>
        <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] line-clamp-3">{description}</p>
      </div>
    </div>
  )
}
