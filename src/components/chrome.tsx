import { Link } from '@tanstack/react-router'
import type { MouseEvent } from 'react'
import { site } from '~/content/site'
import type { Status as S } from '~/content/projects'
import { GitHub, Mail, Moon, Rss, Sprout, Sun } from './icons'

const nav = [
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/people', label: 'People' },
  { to: '/bio', label: 'Bio' },
] as const

export function Header() {
  return (
    <header className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-y-2 px-4 py-4 sm:flex-nowrap sm:px-6 sm:py-5 [view-transition-name:site-header]">
      <Link to="/" className="group flex items-center gap-2 text-[15px] font-[620] tracking-[-0.01em]" aria-label={`${site.domain}, home`}>
        <Sprout width={22} height={22} className="text-leaf transition-transform duration-500 ease-out-expo group-hover:-rotate-6" />
        {site.domain}
      </Link>
      <nav aria-label="Main" className="isolate order-3 -ml-2.5 flex w-full items-center gap-0.5 text-[14px] sm:order-2 sm:ml-auto sm:w-auto sm:gap-1">
        {nav.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            className="relative rounded-full px-2.5 py-1.5 text-muted transition-colors duration-200 hover:text-ink sm:px-3"
            activeProps={{ className: 'text-ink!', 'aria-current': 'page' }}
          >
            {({ isActive }) => (
              <>
                {/* One pill that slides between links on route change (view transition). */}
                {isActive && <span className="nav-pill absolute inset-0 -z-10 rounded-full bg-tile-2" aria-hidden />}
                {n.label}
              </>
            )}
          </Link>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  )
}

function ThemeToggle() {
  function toggle(e: MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement
    const current = root.dataset.theme ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    const next = current === 'dark' ? 'light' : 'dark'
    const apply = () => {
      root.dataset.theme = next
      localStorage.setItem('theme', next)
    }
    if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return apply()
    // Circular reveal from the button.
    const { clientX: x, clientY: y } = e
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    root.classList.add('theme-switch')
    const t = document.startViewTransition(apply)
    t.ready.then(() =>
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 550, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', pseudoElement: '::view-transition-new(root)' },
      ),
    )
    t.finished.finally(() => root.classList.remove('theme-switch'))
  }
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      className="press order-2 ml-auto grid size-8 place-items-center rounded-full text-muted hover:bg-tile-2 hover:text-ink sm:order-3 sm:ml-1"
    >
      <Sun className="theme-sun" />
      <Moon className="theme-moon" />
    </button>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto mt-24 max-w-[1200px] px-4 pb-10 sm:px-6">
      <div className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[22px] font-[600] tracking-[-0.02em] [font-stretch:108%]">Got a project in mind? Email me.</p>
          <a href={`mailto:${site.email}`} className="link mt-1 inline-block text-muted">
            {site.email}
          </a>
        </div>
        <div className="flex items-center gap-1 text-muted">
          <IconLink href={site.githubUrl} label="GitHub"><GitHub /></IconLink>
          <IconLink href={`mailto:${site.email}`} label="Email"><Mail /></IconLink>
          <IconLink href="/rss.xml" label="RSS feed"><Rss /></IconLink>
          <span className="ml-3 text-[13px]">© {new Date().getFullYear()} {site.name}</span>
        </div>
      </div>
    </footer>
  )
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} aria-label={label} className="press grid size-9 place-items-center rounded-full hover:bg-tile-2 hover:text-ink">
      {children}
    </a>
  )
}

const statusText: Record<S, string> = { shipped: 'Shipped', building: 'Building', paused: 'Paused' }
const statusDot: Record<S, string> = { shipped: 'bg-leaf', building: 'bg-bud', paused: 'bg-muted' }

export function Status({ status, year }: { status: S; year: number }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[13px] text-muted [font-variant-numeric:tabular-nums]">
      <span className={`size-1.5 rounded-full ${statusDot[status]}`} aria-hidden />
      {statusText[status]} · {year}
    </span>
  )
}

export function PageTitle({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="pt-10 pb-10 sm:pt-16 sm:pb-14">
      <h1 className="rise text-[clamp(40px,6vw,64px)] leading-[1.02] font-[680] tracking-[-0.035em] [font-stretch:112%]">{title}</h1>
      {children && <div className="rise mt-4 max-w-[56ch] text-[17px] text-muted [--i:1]">{children}</div>}
    </div>
  )
}

export function Initials({ name }: { name: string }) {
  const letters = name.split(' ').map((w) => w[0]).join('').slice(0, 2)
  return (
    <span aria-hidden className="grid size-9 shrink-0 place-items-center rounded-full bg-tile-2 text-[13px] font-[650] tracking-[0.02em] text-leaf ring-1 ring-line">
      {letters}
    </span>
  )
}
