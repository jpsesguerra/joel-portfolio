'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { TokenCircleIcon, BoundingBoxIcon, LaptopPhoneSyncIcon } from '@hugeicons/core-free-icons'

const imgDsScreenshot = '/assets/43f00e13-2b60-4483-ac7c-4b3080226ada.png'

function useCountUp(target: number, started: boolean, duration = 800) {
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

export function AnimatedDSCard() {
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

  const tokens = useCountUp(155, started, 1600)
  const components = useCountUp(32, started, 1400)
  const teams = useCountUp(3, started, 1200)

  return (
    <div ref={ref} className="relative rounded-[6px] border border-[var(--color-system-border)] overflow-hidden flex-1 bg-[var(--color-system-white)] min-h-[200px]">
      {/* Badge */}
      <div className="absolute top-4 left-4 z-10 bg-[#e0f5e8] px-2 py-[3px] rounded-[4px]">
        <p className="font-mono font-semibold text-[12px] leading-[18px] text-[#2c7d5a] uppercase">LIQUID DESIGN SYSTEM</p>
      </div>

      {/* App screenshot — fades in, masked on the left edge */}
      <Image
        src={imgDsScreenshot}
        alt="Liquid design system screenshot"
        width={200}
        height={217}
        loading="lazy"
        className="absolute right-0 top-[47px] h-[217px] object-cover object-left-top"
        style={{
          width: '200px',
          maskImage: 'linear-gradient(to right, transparent 0%, black 28%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 28%)',
          opacity: started ? 1 : 0,
          transform: started ? 'translateX(0)' : 'translateX(20px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
          transitionDelay: '0.15s',
        }}
      />

      {/* Stats */}
      <div className="absolute left-6 top-14 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[6px] bg-[rgba(0,163,246,0.12)] flex items-center justify-center">
            <HugeiconsIcon icon={TokenCircleIcon} size={20} color="#00A3F6" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-[20px] leading-[28px] font-bold text-[var(--color-text-secondary)]">{tokens}</p>
            <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-secondary)] opacity-35">Design tokens</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[6px] bg-[rgba(0,163,246,0.12)] flex items-center justify-center">
            <HugeiconsIcon icon={BoundingBoxIcon} size={20} color="#00A3F6" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-[20px] leading-[28px] font-bold text-[var(--color-text-secondary)]">{components}</p>
            <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-secondary)] opacity-35">Components</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[6px] bg-[rgba(0,163,246,0.12)] flex items-center justify-center">
            <HugeiconsIcon icon={LaptopPhoneSyncIcon} size={20} color="#00A3F6" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-[20px] leading-[28px] font-bold text-[var(--color-text-secondary)]">{teams}</p>
            <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-secondary)] opacity-35">React teams</p>
          </div>
        </div>
      </div>
    </div>
  )
}
