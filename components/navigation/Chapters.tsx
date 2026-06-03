'use client'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ChapterItem {
  id: string
  label: string
}

interface ChaptersProps {
  items: ChapterItem[]
}

export function Chapters({ items }: ChaptersProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: '-20% 0px -60% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [items])

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-chapters-mobile]')) setMenuOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  const activeLabel = items.find((i) => i.id === activeId)?.label ?? ''
  const activeIndex = items.findIndex((i) => i.id === activeId)

  const NavLink = ({ id, label, index, onClick }: { id: string; label: string; index: number; onClick?: () => void }) => (
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        onClick?.()
      }}
      className={cn(
        'flex items-baseline gap-[6px] font-mono text-[10px] leading-[16px] uppercase py-1 transition-colors duration-[150ms] hover:text-[var(--color-system-text-primary)]',
        activeId === id
          ? 'text-[var(--color-brand-primary)] font-medium'
          : 'text-[var(--color-system-text-tertiary)]'
      )}
    >
      <span className="opacity-50 tabular-nums">{String(index).padStart(2, '0')}</span>
      <span>{label}</span>
    </a>
  )

  return (
    <>
      {/* ── Desktop sidebar (≥800px) ─────────────────────────────────── */}
      <aside className="hidden min-[800px]:block w-[160px] flex-shrink-0 sticky top-20 self-start py-2">
        <nav className="flex flex-col gap-1">
          {items.map(({ id, label }, index) => (
            <NavLink key={id} id={id} label={label} index={index} />
          ))}
        </nav>
      </aside>

      {/* ── Mobile/tablet floating button (<800px) ───────────────────── */}
      <div
        data-chapters-mobile
        className="min-[800px]:hidden fixed bottom-6 left-6 z-50 flex flex-col items-start"
      >
        {/* Expanding menu */}
        {menuOpen && (
          <div className="mb-2 bg-[var(--color-system-white)] rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.14)] border border-[var(--color-system-border)] p-3 flex flex-col gap-0.5 min-w-[180px]">
            {items.map(({ id, label }, index) => (
              <NavLink key={id} id={id} label={label} index={index} onClick={() => setMenuOpen(false)} />
            ))}
          </div>
        )}

        {/* FAB trigger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex items-center gap-2 bg-[var(--color-system-white)] border border-[var(--color-system-border)] shadow-[0_4px_16px_rgba(0,0,0,0.12)] rounded-full pl-3 pr-4 py-2 transition-shadow hover:shadow-[0_6px_24px_rgba(0,0,0,0.16)]"
          aria-label="Toggle chapter navigation"
        >
          {/* Icon: list / close */}
          <span className="w-4 h-4 flex flex-col justify-center gap-[3px]">
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 3L13 13M13 3L3 13" stroke="var(--color-brand-primary)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12M2 8h12M2 12h12" stroke="var(--color-brand-primary)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </span>
          <span className="font-mono text-[10px] leading-[16px] uppercase text-[var(--color-system-text-secondary)]">
            {activeIndex >= 0 ? `${String(activeIndex).padStart(2, '0')} ${activeLabel}` : 'Chapters'}
          </span>
        </button>
      </div>
    </>
  )
}
