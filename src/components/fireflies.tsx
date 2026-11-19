import { useEffect, useRef } from 'react'

type Fly = { x: number; y: number; z: number; heading: number; turn: number; vx: number; vy: number; phase: number; period: number }

// One soft dot drawn once and stamped per fly, so a frame is a few dozen drawImage calls.
function sprite(r: number, g: number, b: number, glow: boolean) {
  const s = document.createElement('canvas')
  s.width = s.height = 64
  const c = s.getContext('2d')!
  const grad = c.createRadialGradient(32, 32, 0, 32, 32, 32)
  const at = (stop: number, a: number) => grad.addColorStop(stop, `rgba(${r},${g},${b},${a})`)
  if (glow) {
    at(0, 1), at(0.1, 0.95), at(0.3, 0.2), at(1, 0)
  } else {
    at(0, 0.9), at(0.45, 0.45), at(1, 0)
  }
  c.fillStyle = grad
  c.fillRect(0, 0, 64, 64)
  return s
}

/** Fireflies drifting through the canopy behind everything; pale pollen in light mode. They scatter from the pointer. */
export function Fireflies() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const root = document.documentElement
    const darkQuery = matchMedia('(prefers-color-scheme: dark)')
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches
    const dark = () => (root.dataset.theme ? root.dataset.theme === 'dark' : darkQuery.matches)
    const glow = sprite(214, 245, 160, true)
    const pollen = sprite(23, 128, 74, false)

    let w = 0
    let h = 0
    let flies: Fly[] = []
    const spawn = (): Fly => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: 0.35 + Math.random() * 0.65,
      heading: Math.random() * Math.PI * 2,
      turn: 0,
      vx: 0,
      vy: 0,
      phase: Math.random(),
      period: 2.5 + Math.random() * 4,
    })
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2)
      w = innerWidth
      h = innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.round(Math.min(34, Math.max(10, (w * h) / 42000)))
      while (flies.length < n) flies.push(spawn())
      flies = flies.slice(0, n)
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      const isDark = dark()
      for (const f of flies) {
        // Mostly dim, with a short bright pulse each period, like the real thing.
        const pulse = 0.5 - 0.5 * Math.cos(2 * Math.PI * (t / f.period + f.phase))
        const lit = still ? 0.6 : 0.12 + 0.88 * pulse ** 3
        const size = isDark ? (12 + 20 * f.z) * (0.85 + 0.3 * lit) : 4 + 6 * f.z
        ctx.globalAlpha = isDark ? 0.7 * lit * (0.45 + 0.55 * f.z) : 0.34 * (0.55 + 0.45 * f.z)
        ctx.drawImage(isDark ? glow : pollen, f.x - size / 2, f.y - size / 2, size, size)
      }
    }

    resize()
    addEventListener('resize', resize)

    if (still) {
      // Reduced motion: one quiet, unmoving frame, redrawn only when the size or theme changes.
      const paint = () => draw(0)
      paint()
      const watch = new MutationObserver(paint)
      watch.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
      addEventListener('resize', paint)
      darkQuery.addEventListener('change', paint)
      return () => {
        watch.disconnect()
        removeEventListener('resize', resize)
        removeEventListener('resize', paint)
        darkQuery.removeEventListener('change', paint)
      }
    }

    let px = -1e4
    let py = -1e4
    const onMove = (e: PointerEvent) => {
      px = e.clientX
      py = e.clientY
    }
    const onOut = (e: PointerEvent) => {
      if (!e.relatedTarget) px = py = -1e4
    }
    addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerout', onOut)

    let lastScroll = scrollY
    let last = performance.now()
    let raf = 0
    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      // Closer flies slide further when the page scrolls, for a little depth.
      const scrolled = scrollY - lastScroll
      lastScroll = scrollY
      for (const f of flies) {
        f.turn = Math.max(-0.9, Math.min(0.9, f.turn + (Math.random() - 0.5) * 3 * dt))
        f.heading += f.turn * dt
        const speed = 6 + 14 * f.z
        const dx = f.x - px
        const dy = f.y - py
        const d = Math.hypot(dx, dy)
        if (d < 140 && d > 0.1) {
          const push = (1 - d / 140) ** 2 * 900 * dt
          f.vx += (dx / d) * push
          f.vy += (dy / d) * push
        }
        f.vx *= 1 - Math.min(1, 2.2 * dt)
        f.vy *= 1 - Math.min(1, 2.2 * dt)
        f.x += (Math.cos(f.heading) * speed + f.vx) * dt
        f.y += (Math.sin(f.heading) * speed - 3 + f.vy) * dt - scrolled * f.z * 0.3
        // Wrap around the edges with a margin so nothing pops in view.
        if (f.x < -24) f.x += w + 48
        else if (f.x > w + 24) f.x -= w + 48
        if (f.y < -24) f.y += h + 48
        else if (f.y > h + 24) f.y -= h + 48
      }
      draw(now / 1000)
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', resize)
      removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerout', onOut)
    }
  }, [])

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10 size-full" />
}
