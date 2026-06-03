'use client'
import { cn } from '@/lib/utils'
import { Chip } from '@/components/ui/Chip'

interface CaseStudyPreviewCardProps {
  title: string
  category: string
  description: string
  chips?: string[]
  className?: string
}

export function CaseStudyPreviewCard({ title, category, description, chips = [], className }: CaseStudyPreviewCardProps) {
  return (
    <div
      className={cn(
        'w-[366px] h-[380px] bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md flex flex-col overflow-hidden cursor-pointer transition-shadow duration-[200ms] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]',
        className
      )}
    >
      {/* Image area */}
      <div className="flex-1 bg-[var(--color-system-background-02)]" />
      {/* Content */}
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          {chips.map((chip) => <Chip key={chip}>{chip}</Chip>)}
        </div>
        <h3 className="text-[18px] leading-[26px] font-bold text-[var(--color-system-text-primary)]">{title}</h3>
        <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)] line-clamp-2">{description}</p>
      </div>
    </div>
  )
}
