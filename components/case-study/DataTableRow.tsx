import { cn } from '@/lib/utils'

type RowVariant = 'header' | 'default' | 'matched' | 'warning' | 'error'

interface DataTableRowProps {
  variant: RowVariant
  cells: string[]
  className?: string
}

const bgMap: Record<RowVariant, string> = {
  header:  'bg-[var(--color-system-background-02)]',
  default: 'bg-transparent hover:bg-black/[0.02]',
  matched: 'bg-[var(--color-system-success)]/10',
  warning: 'bg-[var(--color-system-warning)]/10',
  error:   'bg-[var(--color-system-error)]/10',
}

export function DataTableRow({ variant, cells, className }: DataTableRowProps) {
  const isHeader = variant === 'header'
  return (
    <div className={cn('flex items-center w-full', isHeader ? 'h-[34px]' : 'h-[46px]', bgMap[variant], className)}>
      {cells.map((cell, i) => (
        <div
          key={i}
          className={cn(
            'flex-1 px-4',
            isHeader
              ? 'font-mono text-[10px] uppercase text-[var(--color-system-text-tertiary)]'
              : i === 0
                ? 'text-[14px] leading-[22px] font-medium text-[var(--color-system-text-primary)]'
                : 'text-[14px] leading-[22px] text-[var(--color-system-text-secondary)]'
          )}
        >
          {cell}
        </div>
      ))}
    </div>
  )
}
