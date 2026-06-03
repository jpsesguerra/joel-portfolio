import { StatStripItem } from './StatStripItem'

interface StatItem {
  number: string
  label: string
}

interface StatStripProps {
  items: [StatItem, StatItem, StatItem, StatItem]
}

export function StatStrip({ items }: StatStripProps) {
  return (
    <div className="-mx-10 flex bg-[var(--color-brand-primary)]">
      {items.map((item, i) => (
        <StatStripItem key={i} number={item.number} label={item.label} isLast={i === 3} />
      ))}
    </div>
  )
}
