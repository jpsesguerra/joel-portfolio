'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// Figma assets — expires ~7 days from Jun 1 2026
const imgChartBg   = '/assets/39e46a1d-aaa2-442a-81b2-2e9c7ddab828.svg'
const imgChartLine = '/assets/fc0473df-cd55-4bb1-a1d1-4505dbf8ce1e.svg'
const imgMilesPhoto = '/assets/030b081a-ca7a-4ff5-aab4-c3fd31fda351.png'
const imgFleetio   = '/assets/02b5e95c-9261-4815-9a49-248e0a31785c.png'
const imgFigma     = '/assets/deca7c0a-9bca-49d2-af0c-7c873c774064.svg'
const imgClaude    = '/assets/42b781eb-ee75-4f5e-8c6c-a8db19d6f2e1.svg'
const imgCursor    = '/assets/184cbaa8-d1ca-4ae5-b707-a1974d44206c.svg'

const SLIDE_COUNT   = 3
const AUTO_INTERVAL = 5000
const SLIDE_H       = 198 // px — content height shared by all slides

// ── Slide 1: Career chart (includes the subtitle) ────────────────────────────
function SlideChart({ isActive }: { isActive: boolean }) {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (!isActive) { setRevealed(false); return }
    const t = setTimeout(() => setRevealed(true), 350)
    return () => clearTimeout(t)
  }, [isActive])

  return (
    <div
      className="bg-[var(--color-system-background-02)] rounded-[6px] px-4 pt-3 pb-2 flex flex-col gap-1"
      style={{ height: SLIDE_H }}
    >
      {/* Subtitle lives here only — hidden from other slides */}
      <p className="px-1 text-[11px] leading-[16px] text-[var(--color-text-secondary)] tracking-[0.03px] shrink-0">
        9+ years helping companies across multiple stages.
      </p>

      {/* Chart */}
      <div className="flex flex-1 min-h-0">
        {/* Y-axis labels — 28 px left column */}
        <div
          className="flex flex-col gap-[10px] items-end shrink-0 font-mono text-right uppercase opacity-60 pt-[6px] pr-[3px]"
          style={{ width: '28px', fontSize: '6px', lineHeight: '8px', color: 'var(--color-text-secondary)' }}
        >
          <div style={{ height: '14px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>IPO</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <span>Series</span><span>C/D</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <span>Series</span><span>A/B</span>
          </div>
          <div style={{ height: '14px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>SEED</div>
        </div>

        {/* Chart images */}
        <div className="relative flex-1">
          <Image alt="" src={imgChartBg} fill className="object-fill" />
          <div className="absolute" style={{ top: '10px', left: '2px', right: 0, bottom: '18px', overflow: 'hidden' }}>
            <Image alt="" src={imgChartLine} fill className="object-fill" />
            {/* Reveal cover — shrinks right→left to expose line left→right */}
            <div
              className="absolute inset-0"
              style={{
                background: '#f8fafd',
                transformOrigin: 'right center',
                transform: revealed ? 'scaleX(0)' : 'scaleX(1)',
                transition: revealed ? 'transform 1.4s cubic-bezier(0.4,0,0.2,1)' : 'none',
              }}
            />
          </div>

          {/* X-axis years */}
          <div
            className="absolute bottom-0 left-0 right-0 flex font-mono uppercase text-[var(--color-text-primary)]"
            style={{ gap: '2px', paddingLeft: '2px', paddingBottom: '2px' }}
          >
            {['2016','','2018','','2020','','2022','','2024','','2026'].map((y, i) => (
              <span key={i} className="shrink-0 text-center" style={{ width: '22px', fontSize: i % 2 === 0 ? '6px' : '8px' }}>{y}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Slide 2: Recommendation ──────────────────────────────────────────────────
function SlideRecommendation() {
  return (
    <div
      className="bg-[var(--color-system-background-02)] rounded-[6px] px-4 py-3 flex flex-col justify-between"
      style={{ height: SLIDE_H }}
    >
      <div className="flex flex-col gap-2 text-[11px] leading-[16px] text-[var(--color-text-primary)] tracking-[0.03px]">
        <p>
          "While Joel can output screens, mocks, and flows with the best of them — Joel's true value lies in his endless hunger to understand customers, problems, and why. This affinity for deeply researching (and understanding) users then translates into all his design work. Which in turn yields world class UX and UI.
        </p>
        <p>Joel would be an invaluable asset to any team."</p>
      </div>
      <div className="flex items-center justify-between py-[1px]">
        <div className="flex gap-3 items-center">
          <Image alt="Miles Rand" src={imgMilesPhoto} width={36} height={36} className="rounded-full object-cover shrink-0" />
          <div className="flex flex-col text-[var(--color-text-primary)]">
            <p className="font-bold text-[12px] leading-[18px]">Miles Rand</p>
            <p className="text-[11px] leading-[16px] tracking-[0.03px]">Head of Product @ Fleetio</p>
          </div>
        </div>
        <Image alt="Fleetio" src={imgFleetio} width={77} height={40} className="object-contain shrink-0" />
      </div>
    </div>
  )
}

// ── Slide 3: AI Tools ────────────────────────────────────────────────────────
const tools = [
  { icon: imgFigma,  bg: 'rgba(54,203,198,0.1)',  label: 'Figma + Make (Ideation)',       pct: 80, barColor: '#36CBC6' },
  { icon: imgClaude, bg: 'rgba(11,150,163,0.12)', label: 'Claude + Claude Code (Design)', pct: 40, barColor: '#0B96A3' },
  { icon: imgCursor, bg: 'rgba(47,114,85,0.12)',  label: 'Cursor (Hand-off + Testing)',   pct: 20, barColor: '#2F7255' },
]

function useCountUp(target: number, started: boolean, duration = 1200) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!started) { setVal(0); return }
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, target, duration])
  return val
}

function SlideAIToolsInner() {
  const [started, setStarted] = useState(false)
  useEffect(() => { const t = setTimeout(() => setStarted(true), 80); return () => clearTimeout(t) }, [])

  const counts = [
    useCountUp(tools[0].pct, started),
    useCountUp(tools[1].pct, started),
    useCountUp(tools[2].pct, started),
  ]

  return (
    <div
      className="bg-[var(--color-system-background-02)] rounded-[6px] px-6 flex flex-col justify-center gap-4"
      style={{ height: SLIDE_H }}
    >
      <p className="font-mono text-[10px] leading-[16px] uppercase text-[var(--color-text-secondary)]">
        My Top 3 Daily AI Tools
      </p>
      {tools.map((t, i) => (
        <div key={t.label} className="flex flex-col gap-[6px]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[6px] flex items-center justify-center shrink-0" style={{ background: t.bg }}>
              <Image alt="" src={t.icon} width={24} height={24} className="object-contain" />
            </div>
            <p className="font-mono text-[8px] leading-[18px] uppercase text-[var(--color-text-secondary)] flex-1">{t.label}</p>
            <p className="font-mono text-[12px] leading-[18px] uppercase text-[var(--color-text-secondary)] tabular-nums">
              {counts[i]}%
            </p>
          </div>
          <div className="ml-11 h-[2px] rounded-full bg-[#d9d9d9] relative">
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: started ? `${t.pct}%` : '0%',
                backgroundColor: t.barColor,
                transition: started ? 'width 1.4s cubic-bezier(0.16,1,0.3,1)' : 'none',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Main carousel ─────────────────────────────────────────────────────────────
export function WorkExperienceCarousel() {
  const [active, setActive] = useState(0)
  const [aiKey, setAiKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (idx: number) => {
    setActive(idx)
    if (idx === 2) setAiKey((k) => k + 1)
  }

  const advance = () => {
    setActive((prev) => {
      const next = (prev + 1) % SLIDE_COUNT
      if (next === 2) setAiKey((k) => k + 1)
      return next
    })
  }

  useEffect(() => {
    timerRef.current = setInterval(advance, AUTO_INTERVAL)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDot = (idx: number) => {
    if (timerRef.current) clearInterval(timerRef.current)
    goTo(idx)
    timerRef.current = setInterval(advance, AUTO_INTERVAL)
  }

  return (
    // flex-1 so this card grows to match AnimatedDSCard in the same flex-col column
    <div className="bg-[var(--color-system-white)] rounded-[6px] border border-[var(--color-system-border)] p-4 flex flex-col gap-2 flex-1">
      {/* Fixed header — subtitle removed (now lives inside slide 1 only) */}
      <div className="px-2 flex items-center justify-between shrink-0">
        <p className="text-[14px] leading-[20px] font-bold text-[var(--color-text-primary)]">Work Experience</p>
        <a href="/about" className="text-[12px] leading-[18px] font-mono uppercase text-[var(--color-brand-primary)] p-1 hover:opacity-70 transition-opacity duration-[150ms]">Learn More</a>
      </div>

      {/* Sliding content — fixed 198 px tall */}
      <div className="overflow-hidden rounded-[6px]" style={{ height: SLIDE_H }}>
        <div
          className="flex h-full"
          style={{
            transform: `translateX(-${active * 100}%)`,
            transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <div className="w-full h-full shrink-0">
            <SlideChart isActive={active === 0} />
          </div>
          <div className="w-full h-full shrink-0">
            <SlideRecommendation />
          </div>
          <div className="w-full h-full shrink-0">
            <SlideAIToolsInner key={aiKey} />
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-1.5 shrink-0">
        {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
            style={{ background: i === active ? 'var(--color-brand-primary)' : 'rgba(0,0,0,0.15)' }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
