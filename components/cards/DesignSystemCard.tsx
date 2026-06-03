'use client'
import { cn } from '@/lib/utils'

interface DesignSystemCardProps {
  title: string
  description: string
  coverColor?: string
  className?: string
}

export function DesignSystemCard({ title, description, coverColor = 'var(--color-brand-primary-surface)', className }: DesignSystemCardProps) {
  return (
    <div
      className={cn(
        'bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md overflow-hidden cursor-pointer transition-shadow duration-[200ms] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]',
        className
      )}
    >
      <div className="h-40 flex items-center justify-center" style={{ background: coverColor }}>
        <div className="w-10 h-10 rounded-md bg-[var(--color-brand-primary)]/20 flex items-center justify-center">
          <svg width="20" height="20" fill="none" stroke="var(--color-brand-primary)" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
          </svg>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-[16px] leading-[24px] font-semibold text-[var(--color-system-text-primary)] mb-1">{title}</h3>
        <p className="text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]">{description}</p>
      </div>
    </div>
  )
}
