'use client'

import { useEffect, useRef } from 'react'

const CARD_IMG_SRC = '/joel-id-card.png'

// Verlet rope node
type Node = { x: number; y: number; px: number; py: number; pinned: boolean }

const GRAVITY = 0.38
const DAMPING = 0.982
const ITERATIONS = 16
const SEG_COUNT = 18
const CARD_W = 132
const CARD_H = 172

// Rounded rect helper (fallback for browsers without ctx.roundRect)
function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

export function LanyardCard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return
    const ctx = canvas.getContext('2d')!

    // Size canvas to container
    const W = container.clientWidth
    const H = container.clientHeight
    canvas.width = W
    canvas.height = H

    // Anchor: upper-center of canvas (where lanyard exits top of card)
    const anchorX = W * 0.58
    const anchorY = 0

    const ROPE_LEN = H * 0.44
    const SEG_LEN = ROPE_LEN / SEG_COUNT

    // Initialize rope as straight vertical chain
    const nodes: Node[] = Array.from({ length: SEG_COUNT + 1 }, (_, i) => ({
      x: anchorX,
      y: anchorY + i * SEG_LEN,
      px: anchorX + (Math.random() - 0.5) * 0.5, // tiny jitter so sim starts
      py: anchorY + i * SEG_LEN,
      pinned: i === 0,
    }))

    // Card center of mass
    let cx = anchorX
    let cy = anchorY + ROPE_LEN + CARD_H * 0.5
    let pcx = cx
    let pcy = cy - 0.01
    let angle = 0
    let pAngle = 0

    let dragging = false
    let dragOffX = 0
    let dragOffY = 0
    let mouseX = cx
    let mouseY = cy

    // Load the ID card image
    const img = new Image()
    img.src = CARD_IMG_SRC

    // Convert mouse/touch to canvas coords
    const toCanvas = (clientX: number, clientY: number) => {
      const r = canvas.getBoundingClientRect()
      return {
        x: (clientX - r.left) * (W / r.width),
        y: (clientY - r.top) * (H / r.height),
      }
    }

    // Hit test: is point inside (rotated) card?
    const hitCard = (px: number, py: number) => {
      const cos = Math.cos(-angle)
      const sin = Math.sin(-angle)
      const dx = px - cx
      const dy = py - cy
      const lx = dx * cos - dy * sin
      const ly = dx * sin + dy * cos
      return Math.abs(lx) < CARD_W / 2 + 8 && Math.abs(ly) < CARD_H / 2 + 8
    }

    const onMouseDown = (e: MouseEvent) => {
      const p = toCanvas(e.clientX, e.clientY)
      if (hitCard(p.x, p.y)) {
        dragging = true
        dragOffX = p.x - cx
        dragOffY = p.y - cy
        mouseX = cx; mouseY = cy
        canvas.style.cursor = 'grabbing'
        e.preventDefault()
      }
    }
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging) return
      const p = toCanvas(e.clientX, e.clientY)
      mouseX = p.x - dragOffX
      mouseY = p.y - dragOffY
      e.preventDefault()
    }
    const onMouseUp = () => { dragging = false; canvas.style.cursor = 'grab' }

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0]
      const p = toCanvas(t.clientX, t.clientY)
      if (hitCard(p.x, p.y)) {
        dragging = true
        dragOffX = p.x - cx; dragOffY = p.y - cy
        mouseX = cx; mouseY = cy
        e.preventDefault()
      }
    }
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging) return
      const t = e.touches[0]
      const p = toCanvas(t.clientX, t.clientY)
      mouseX = p.x - dragOffX; mouseY = p.y - dragOffY
      e.preventDefault()
    }
    const onTouchEnd = () => { dragging = false }

    canvas.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    canvas.addEventListener('touchstart', onTouchStart, { passive: false })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd)
    canvas.style.cursor = 'grab'

    // --- Physics ---
    const solve = () => {
      // Pin anchor
      nodes[0].x = anchorX
      nodes[0].y = anchorY

      for (let iter = 0; iter < ITERATIONS; iter++) {
        // Rope segment constraints
        for (let i = 0; i < nodes.length - 1; i++) {
          const a = nodes[i], b = nodes[i + 1]
          const dx = b.x - a.x, dy = b.y - a.y
          const dist = Math.hypot(dx, dy) || 0.001
          const corr = (dist - SEG_LEN) / dist * 0.5
          if (!a.pinned) { a.x += dx * corr; a.y += dy * corr }
          if (!b.pinned) { b.x -= dx * corr; b.y -= dy * corr }
        }

        // Last rope node → clip point at top of card
        const ln = nodes[nodes.length - 1]
        const clipX = cx - Math.sin(angle) * (CARD_H * 0.5 - 4)
        const clipY = cy - Math.cos(angle) * (CARD_H * 0.5 - 4)
        const ddx = clipX - ln.x, ddy = clipY - ln.y
        const ddist = Math.hypot(ddx, ddy) || 0.001
        if (ddist > 1) {
          const c = (ddist - 1) / ddist * 0.5
          if (!ln.pinned) { ln.x += ddx * c; ln.y += ddy * c }
          if (!dragging) { cx -= ddx * c * 0.4; cy -= ddy * c * 0.4 }
        }

        // Clamp nodes to canvas bounds
        for (const n of nodes) {
          if (n.pinned) continue
          n.x = Math.max(4, Math.min(W - 4, n.x))
          n.y = Math.max(4, Math.min(H - 4, n.y))
        }

        // Clamp card
        cx = Math.max(CARD_W / 2 + 4, Math.min(W - CARD_W / 2 - 4, cx))
        cy = Math.max(CARD_H / 2 + 4, Math.min(H - CARD_H / 2 - 4, cy))
      }
    }

    const update = () => {
      if (dragging) {
        pcx = cx; pcy = cy
        cx = mouseX; cy = mouseY
        pAngle = angle
        angle *= 0.88
      } else {
        const vx = (cx - pcx) * DAMPING
        const vy = (cy - pcy) * DAMPING
        pcx = cx; pcy = cy
        cx += vx; cy += vy + GRAVITY

        // Angular velocity driven by horizontal movement
        const aVel = (angle - pAngle) * DAMPING + vx * 0.014
        pAngle = angle
        angle = angle + aVel
        angle *= 0.93
      }

      // Rope verlet
      for (const n of nodes) {
        if (n.pinned) continue
        const vx = (n.x - n.px) * DAMPING
        const vy = (n.y - n.py) * DAMPING
        n.px = n.x; n.py = n.y
        n.x += vx; n.y += vy + GRAVITY * 0.55
      }

      solve()
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // ── Lanyard rope ──
      if (nodes.length > 1) {
        ctx.save()
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        // Shadow pass
        ctx.beginPath()
        ctx.moveTo(nodes[0].x, nodes[0].y)
        for (let i = 1; i < nodes.length; i++) {
          const p = nodes[i - 1], q = nodes[i]
          ctx.quadraticCurveTo(p.x, p.y, (p.x + q.x) / 2, (p.y + q.y) / 2)
        }
        ctx.strokeStyle = 'rgba(0,0,0,0.18)'
        ctx.lineWidth = 13
        ctx.stroke()

        // Main rope
        ctx.beginPath()
        ctx.moveTo(nodes[0].x, nodes[0].y)
        for (let i = 1; i < nodes.length; i++) {
          const p = nodes[i - 1], q = nodes[i]
          ctx.quadraticCurveTo(p.x, p.y, (p.x + q.x) / 2, (p.y + q.y) / 2)
        }
        ctx.strokeStyle = '#191d35'
        ctx.lineWidth = 9
        ctx.stroke()

        // Highlight sheen
        ctx.beginPath()
        ctx.moveTo(nodes[0].x - 2, nodes[0].y)
        for (let i = 1; i < nodes.length; i++) {
          const p = nodes[i - 1], q = nodes[i]
          ctx.quadraticCurveTo(p.x - 2, p.y, (p.x + q.x) / 2 - 2, (p.y + q.y) / 2)
        }
        ctx.strokeStyle = 'rgba(255,255,255,0.13)'
        ctx.lineWidth = 2.5
        ctx.stroke()
        ctx.restore()
      }

      // ── Metal clip at anchor ──
      ctx.save()
      ctx.shadowColor = 'rgba(0,0,0,0.45)'
      ctx.shadowBlur = 6
      ctx.shadowOffsetY = 3
      const clipGrad = ctx.createLinearGradient(anchorX - 7, 4, anchorX + 7, 4)
      clipGrad.addColorStop(0, '#9a9a9a')
      clipGrad.addColorStop(0.4, '#e0e0e0')
      clipGrad.addColorStop(1, '#7a7a7a')
      ctx.fillStyle = clipGrad
      roundRect(ctx, anchorX - 7, 0, 14, 20, 3)
      ctx.fill()
      ctx.restore()

      // ── Ground shadow below card ──
      const swingRatio = Math.min(Math.abs(cx - anchorX) / (W * 0.4), 1)
      const shadowW = CARD_W * 0.65 * (1 + swingRatio * 0.3)
      const shadowAlpha = 0.16 * (1 - swingRatio * 0.45)
      const shadowY = cy + CARD_H / 2 + 12
      if (shadowY < H - 2) {
        const sg = ctx.createRadialGradient(cx, shadowY, 0, cx, shadowY, shadowW)
        sg.addColorStop(0, `rgba(0,0,0,${shadowAlpha})`)
        sg.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.save()
        ctx.scale(1, 0.3)
        ctx.beginPath()
        ctx.arc(cx, shadowY / 0.3, shadowW, 0, Math.PI * 2)
        ctx.fillStyle = sg
        ctx.fill()
        ctx.restore()
      }

      // ── ID card ──
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(angle)

      // Card drop shadow
      ctx.shadowColor = 'rgba(0,0,0,0.38)'
      ctx.shadowBlur = 28
      ctx.shadowOffsetX = angle * 12
      ctx.shadowOffsetY = 14

      if (img.complete && img.naturalWidth > 0) {
        // Crop the badge portion: Figma-derived region of 1254x1254 source
        const srcX = 470
        const srcY = 578
        const srcW = 312
        const srcH = 676

        // Clip to rounded card shape
        roundRect(ctx, -CARD_W / 2, -CARD_H / 2, CARD_W, CARD_H, 10)
        ctx.clip()

        ctx.drawImage(
          img,
          srcX, srcY, srcW, srcH,
          -CARD_W / 2, -CARD_H / 2, CARD_W, CARD_H,
        )
      } else {
        // Placeholder while image loads
        ctx.fillStyle = '#fff'
        roundRect(ctx, -CARD_W / 2, -CARD_H / 2, CARD_W, CARD_H, 10)
        ctx.fill()
      }
      ctx.restore()
    }

    let rafId: number
    const loop = () => {
      update()
      draw()
      rafId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(rafId)
      canvas.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      canvas.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-y-0 right-0 w-[230px]">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ touchAction: 'none', display: 'block' }}
      />
    </div>
  )
}
