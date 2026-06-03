'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  icon: React.ReactNode
  label: string
  value: number
  color: string
  maxWidth: number
}

function useCountUp(target: number, started: boolean, duration = 1600) {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    if (!started) return
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, target, duration])
  return current
}

function StatRow({ icon, label, value, color, started }: Stat & { started: boolean }) {
  const count = useCountUp(value, started)

  return (
    <div className="flex flex-col gap-[6px]">
      {/* Icon + label + percentage */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex-shrink-0 rounded-[6px] flex items-center justify-center" style={{ background: `${color}1a` }}>
          {icon}
        </div>
        <p className="font-mono text-[8px] leading-[18px] uppercase text-[var(--color-text-secondary)] flex-1">{label}</p>
        <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-secondary)]">{count}%</p>
      </div>
      {/* Track + animated bar — perfectly aligned via relative container */}
      <div className="ml-[44px] h-[2px] rounded-full bg-[#d9d9d9] relative">
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: started ? `${value}%` : '0%',
            backgroundColor: color,
            transition: started ? 'width 1.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
          }}
        />
      </div>
    </div>
  )
}

interface AnimatedStatCardProps {
  stats: Stat[]
}

export function AnimatedStatCard({ stats }: AnimatedStatCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="bg-[var(--color-system-background-02)] rounded-[6px] p-6 flex flex-col gap-4 max-h-[184px] overflow-hidden">
      {stats.map((stat) => (
        <StatRow key={stat.label} {...stat} started={started} />
      ))}
    </div>
  )
}
