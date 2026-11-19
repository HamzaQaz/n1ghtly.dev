import { useEffect, useState } from 'react'

// Google's gtag shape: consent commands only count when pushed as an arguments object.
function gtag(..._: unknown[]) {
  ;(window as unknown as { dataLayer: unknown[] }).dataLayer.push(arguments)
}

/** Analytics stays off (Consent Mode default, set in the head) until the visitor accepts. */
export function Consent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem('consent')) setOpen(true)
    } catch {}
    const reopen = () => setOpen(true)
    addEventListener('consent', reopen)
    return () => removeEventListener('consent', reopen)
  }, [])

  const choose = (value: 'granted' | 'denied') => {
    try {
      localStorage.setItem('consent', value)
    } catch {}
    gtag('consent', 'update', { analytics_storage: value })
    setOpen(false)
  }

  if (!open) return null
  return (
    <section aria-label="Cookie consent" className="rise fixed right-4 bottom-4 left-4 z-50 rounded-2xl border border-line-strong bg-tile p-4 shadow-[0_10px_40px_var(--shadow-c)] sm:left-auto sm:max-w-[340px]">
      <p className="text-[14px] leading-[1.5] text-muted">I use analytics cookies to see which pages people visit. Is that okay?</p>
      <div className="mt-3 flex justify-end gap-2 text-[13px]">
        <button type="button" onClick={() => choose('denied')} className="press h-8 rounded-full border border-line-strong px-3.5 font-[560] hover:bg-tile-2">
          Decline
        </button>
        <button type="button" onClick={() => choose('granted')} className="press h-8 rounded-full bg-ink px-3.5 font-[560] text-bg hover:opacity-85">
          Accept
        </button>
      </div>
    </section>
  )
}
