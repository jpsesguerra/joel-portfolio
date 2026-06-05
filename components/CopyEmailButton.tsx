'use client'
import { useState, useEffect, useRef } from 'react'

const EMAIL = 'joelpaolo@me.com'

export function CopyEmailButton({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const [showModal, setShowModal] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleClick = () => {
    navigator.clipboard.writeText(EMAIL).catch(() => {})
    setShowModal(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setShowModal(false), 5000)
  }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  return (
    <>
      <button type="button" onClick={handleClick} className={className}>
        {children}
      </button>

      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
          <div
            className="relative bg-[var(--color-system-white)] border border-[var(--color-system-border)] rounded-[16px] shadow-[0_24px_64px_rgba(0,0,0,0.18)] px-10 py-8 flex flex-col items-center gap-3 pointer-events-auto"
            style={{ animation: 'modalPop 0.35s cubic-bezier(0.34,1.56,0.64,1) both' }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full hover:bg-[var(--color-system-background)] transition-colors text-[var(--color-text-secondary)]"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Icon with pop animation */}
            <span
              className="text-[64px] leading-none select-none"
              style={{ animation: 'iconPop 0.45s cubic-bezier(0.34,1.56,0.64,1) 0.1s both' }}
            >
              💌
            </span>

            {/* Copy */}
            <p className="text-[20px] leading-[28px] font-bold text-[var(--color-brand-primary)] text-center">Email copied!</p>
            <p className="text-[14px] leading-[22px] text-[var(--color-text-secondary)] text-center">(now send that email)</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.82); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes iconPop {
          from { opacity: 0; transform: scale(0.4) rotate(-8deg); }
          to   { opacity: 1; transform: scale(1) rotate(0deg); }
        }
      `}</style>
    </>
  )
}
