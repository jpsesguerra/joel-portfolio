'use client'
import { useState } from 'react'

export function LoomEmbed({ src, className }: { src: string; className?: string }) {
  const [playing, setPlaying] = useState(false)

  const embedId = src.split('/').pop()?.split('?')[0] ?? ''
  const thumbnail = `https://cdn.loom.com/sessions/thumbnails/${embedId}-with-play.gif`

  const wrapStyle: React.CSSProperties = {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
  }

  if (playing) {
    return (
      <div style={wrapStyle} className={className}>
        <iframe
          src={`${src}?autoplay=1`}
          frameBorder={0}
          allowFullScreen
          allow="autoplay; fullscreen"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div>
    )
  }

  return (
    <div
      style={{ ...wrapStyle, cursor: 'pointer', background: '#1a1a2e' }}
      className={className}
      onClick={() => setPlaying(true)}
    >
      <img
        src={thumbnail}
        alt="Loom video thumbnail"
        loading="lazy"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
      />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 72, height: 72, background: 'rgba(0,0,0,0.65)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
          <div style={{ width: 0, height: 0, borderLeft: '20px solid white', borderTop: '13px solid transparent', borderBottom: '13px solid transparent', marginLeft: 5 }} />
        </div>
      </div>
    </div>
  )
}
