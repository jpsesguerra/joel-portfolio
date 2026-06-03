interface ResultCardProps {
  metric: string
  label: string
  subLabel?: string
}

export function ResultCard({ metric, label, subLabel }: ResultCardProps) {
  return (
    <div className="flex-1 min-w-0 bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-md overflow-hidden" style={{ minHeight: '198px' }}>
      <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, var(--color-brand-primary), var(--color-brand-secondary))' }} />
      <div className="p-6 flex flex-col items-center gap-2">
        <p className="font-bold text-[40px] leading-none text-[var(--color-brand-primary)]">{metric}</p>
        <p className="text-[14px] leading-[20px] font-semibold text-[var(--color-system-text-primary)] text-center">{label}</p>
        {subLabel && <p className="text-[12px] leading-[18px] text-[var(--color-system-text-secondary)] text-center">{subLabel}</p>}
      </div>
    </div>
  )
}
