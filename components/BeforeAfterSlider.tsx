'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt?: string
  afterAlt?: string
  initialPosition?: number // 0–100, default 50
  /** Intrinsic aspect ratio (width / height) of the before/after images, used to size the `fill` container. Defaults to the current usage's images (1440x1024). */
  aspectRatio?: number
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before',
  afterAlt = 'After',
  initialPosition = 50,
  aspectRatio = 1440 / 1024,
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(initialPosition)
  const dragging = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const clamp = (v: number) => Math.max(2, Math.min(98, v))

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const { left, width } = el.getBoundingClientRect()
    setPos(clamp(((clientX - left) / width) * 100))
  }, [])

  // Mouse
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    dragging.current = true
    updatePos(e.clientX)
  }

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging.current) updatePos(e.clientX) }
    const onUp   = () => { dragging.current = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
  }, [updatePos])

  // Touch
  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true
    updatePos(e.touches[0].clientX)
  }

  useEffect(() => {
    const onMove = (e: TouchEvent) => { if (dragging.current) updatePos(e.touches[0].clientX) }
    const onEnd  = () => { dragging.current = false }
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onEnd)
    return () => { window.removeEventListener('touchmove', onMove); window.removeEventListener('touchend', onEnd) }
  }, [updatePos])

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none overflow-hidden rounded border border-[var(--color-system-border)]"
      style={{ cursor: dragging.current ? 'grabbing' : 'col-resize', aspectRatio }}
    >
      {/* After (bottom layer — full width) */}
      <Image src={afterSrc} alt={afterAlt} fill className="object-cover" draggable={false} />

      {/* Before (top layer — clipped to left side) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <div
          className="relative h-full"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            className="object-cover"
            draggable={false}
          />
        </div>
      </div>

      {/* Labels */}
      <div className="pointer-events-none absolute bottom-3 left-3">
        <span className="rounded bg-black/60 px-2 py-0.5 font-mono text-[10px] uppercase text-white">Before</span>
      </div>
      <div className="pointer-events-none absolute bottom-3 right-3">
        <span className="rounded bg-black/60 px-2 py-0.5 font-mono text-[10px] uppercase text-white">After</span>
      </div>

      {/* Divider line */}
      <div
        className="pointer-events-none absolute inset-y-0 w-[2px] -translate-x-1/2 bg-white shadow-[0_0_6px_rgba(0,0,0,0.4)]"
        style={{ left: `${pos}%` }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 cursor-grab items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.25)] active:cursor-grabbing"
        style={{ left: `${pos}%` }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* Left/right chevrons */}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M7 5L3 9L7 13" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 5L15 9L11 13" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}
