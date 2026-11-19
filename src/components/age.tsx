import { type CSSProperties, useEffect, useRef } from 'react'
import { site } from '~/content/site'

/** Age in years, counting smoothly from one birthday (visitor's local midnight) to the next. */
export function ageAt(now: Date, born = site.born) {
  const [y, m, d] = born.split('-').map(Number)
  let last = new Date(now.getFullYear(), m - 1, d)
  if (last > now) last = new Date(now.getFullYear() - 1, m - 1, d)
  const next = new Date(last.getFullYear() + 1, m - 1, d)
  return last.getFullYear() - y + (now.getTime() - last.getTime()) / (next.getTime() - last.getTime())
}

// Floored, not rounded, so the counter never shows the next age early.
export const parts = (age: number) => [String(Math.floor(age)), '.' + String(Math.floor((age % 1) * 1e9)).padStart(9, '0')]

export function Age({ className = '', style }: { className?: string; style?: CSSProperties }) {
  const whole = useRef<HTMLSpanElement>(null)
  const frac = useRef<HTMLSpanElement>(null)
  const [w, f] = parts(ageAt(new Date()))

  useEffect(() => {
    const paint = () => {
      const [a, b] = parts(ageAt(new Date()))
      whole.current!.textContent = a
      frac.current!.textContent = b
    }
    // Spinning digits are motion: with reduced motion, tick once a second instead.
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      paint()
      const id = setInterval(paint, 1000)
      return () => clearInterval(id)
    }
    let raf = 0
    const loop = () => {
      paint()
      raf = requestAnimationFrame(loop)
    }
    loop()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <p className={`text-[14px] text-muted ${className}`} style={style}>
      <span aria-hidden className="[font-variant-numeric:tabular-nums]">
        <span ref={whole} className="text-ink" suppressHydrationWarning>{w}</span>
        <span ref={frac} className="text-[11px]" suppressHydrationWarning>{f}</span>
      </span>
      <span className="sr-only" suppressHydrationWarning>{w}</span> years old
    </p>
  )
}
