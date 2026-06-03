import { cn } from '@/lib/utils'

interface MediaPlaceholderProps {
  variant: 'video' | 'image'
  label?: string
  className?: string
}

export function MediaPlaceholder({ variant, label, className }: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        'rounded-lg flex flex-col items-center justify-center gap-3',
        variant === 'video'
          ? 'bg-[var(--color-brand-forest-surface)] border-2 border-dashed border-[var(--color-brand-forest)]/30 min-h-[240px]'
          : 'bg-[var(--color-system-background-02)] border-2 border-dashed border-[var(--color-system-border)] min-h-[200px]',
        className
      )}
    >
      {variant === 'video' && (
        <div className="w-12 h-12 rounded-full bg-[var(--color-brand-forest)]/20 flex items-center justify-center">
          <svg width="24" height="24" fill="none" stroke="var(--color-brand-forest)" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
          </svg>
        </div>
      )}
      {label && (
        <p className="text-[12px] leading-[18px] text-[var(--color-system-text-tertiary)] font-mono uppercase">{label}</p>
      )}
    </div>
  )
}
