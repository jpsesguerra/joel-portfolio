interface StatStripItemProps {
  number: string
  label: string
  isLast?: boolean
}

export function StatStripItem({ number, label, isLast = false }: StatStripItemProps) {
  return (
    <div className={`flex-1 flex flex-col items-center justify-center gap-2 py-10 ${!isLast ? 'border-r border-white/15' : ''}`}>
      <p className="text-[32px] leading-[40px] font-bold text-white">{number}</p>
      <p className="text-[12px] text-white/80">{label}</p>
    </div>
  )
}
