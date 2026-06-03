interface SectionHeaderProps {
  number: string
  title: string
  lead: string
}

export function SectionHeader({ number, title, lead }: SectionHeaderProps) {
  return (
    <div className="flex gap-10 mb-12">
      <div className="min-w-[120px] flex flex-col gap-2 pt-1">
        <p className="font-mono text-[10px] leading-4 uppercase text-[var(--color-brand-primary)]">{number}</p>
        <div className="w-20 h-0.5 bg-[var(--color-brand-primary)]" />
      </div>
      <div className="flex flex-col gap-3 max-w-[720px]">
        <h2 className="text-[40px] leading-[48px] font-bold text-[var(--color-system-text-primary)]">{title}</h2>
        <p className="text-[18px] leading-[28px] text-[var(--color-system-text-secondary)]">{lead}</p>
      </div>
    </div>
  )
}
