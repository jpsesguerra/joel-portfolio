'use client'
import { cn } from '@/lib/utils'
import { Chip } from '@/components/ui/Chip'

interface CaseStudyListCardProps {
  title: string
  description: string
  chips?: string[]
  className?: string
}

export function CaseStudyListCard({ title, description, chips = [], className }: CaseStudyListCardProps) {
  return (
    <div
      className={cn(
        'w-[699px] bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md overflow-hidden cursor-pointer transition-shadow duration-[200ms] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]',
        className
      )}
    >
      {/* Image area */}
      <div className="h-64 bg-[var(--color-system-background-02)]" />
      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {chips.map((chip) => <Chip key={chip}>{chip}</Chip>)}
        </div>
        <h3 className="text-[20px] leading-[28px] font-bold text-[var(--color-system-text-primary)]">{title}</h3>
        <p className="text-[16px] leading-[24px] text-[var(--color-system-text-secondary)]">{description}</p>
      </div>
    </div>
  )
}
