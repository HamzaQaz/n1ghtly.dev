import { Link, createFileRoute } from '@tanstack/react-router'
import { type CSSProperties, Fragment, type PointerEvent, type ReactNode } from 'react'
import { Bridge } from '~/components/bridge'
import { Initials, Status } from '~/components/chrome'
import { ArrowRight, ArrowUpRight, GitHub, Mail, Rss } from '~/components/icons'
import { Shot } from '~/components/shot'
import { people } from '~/content/people'
import { posts } from '~/content/posts'
import { type Project, projects } from '~/content/projects'
import { site } from '~/content/site'

export const Route = createFileRoute('/')({ component: Home })

const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p])) as Record<string, Project>
const i = (n: number) => ({ '--i': n }) as CSSProperties

// Light that follows the pointer across whichever tile it is over.
function spotlight(e: PointerEvent<HTMLElement>) {
  const tile = (e.target as HTMLElement).closest<HTMLElement>('.tile')
  if (!tile) return
  const r = tile.getBoundingClientRect()
  tile.style.setProperty('--x', `${e.clientX - r.left}px`)
  tile.style.setProperty('--y', `${e.clientY - r.top}px`)
}

function Home() {
  const couplet = bySlug.couplet
  const dmcl = bySlug.dmcl
  const temp = bySlug['temperature-alarms']
  const morphic = bySlug.morphicversions
  return (
    <>
      <div className="canopy" aria-hidden />
      <section className="grid gap-5 pt-6 pb-8 sm:pt-10 sm:pb-10 lg:grid-cols-12 lg:items-end lg:gap-3">
        <h1 className="text-[clamp(48px,8vw,96px)] leading-[0.95] font-[700] tracking-[-0.04em] [font-stretch:115%] lg:col-span-7">
          {site.name.split(' ').map((w, n) => (
            <Fragment key={w}>
              {n > 0 && ' '}
              <span className="intro-word" style={i(n)}>{w}</span>
            </Fragment>
          ))}
        </h1>
        <div className="lg:col-span-5 lg:pb-1.5 lg:pl-7">
          <p className="intro-fade max-w-[36ch] text-[clamp(17px,1.7vw,20px)] leading-[1.4] text-muted" style={i(2)}>
            <span className="text-ink">{site.role}.</span> {site.line}
          </p>
          <div className="intro-fade mt-5 flex flex-wrap gap-2 text-[14px]" style={i(3)}>
            <a href={site.githubUrl} className="press inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 font-[560] text-bg hover:opacity-85">
              <GitHub /> GitHub
            </a>
            <a href={`mailto:${site.email}`} className="press inline-flex h-10 items-center gap-2 rounded-full border border-line-strong px-4 font-[560] hover:bg-tile-2">
              <Mail /> {site.email}
            </a>
          </div>
        </div>
      </section>

      <section aria-label="Work" onPointerMove={spotlight} className="grid grid-cols-1 gap-3 md:grid-cols-12">
        <Tile project={couplet} n={0} className="md:col-span-12 lg:col-span-7 lg:row-span-2" external>
          <div className="mt-6 -mr-6 -mb-6 flex flex-1 flex-col sm:-mr-7 sm:-mb-7">
            <Shot
              image={couplet.image!}
              sizes="(min-width: 1024px) 720px, 100vw"
              priority
              sweep
              className="rounded-r-none rounded-b-none lg:relative lg:flex-1"
              imgClassName="aspect-[16/10] object-left-top lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            />
          </div>
        </Tile>

        <Tile project={dmcl} n={1} className="md:col-span-6 lg:col-span-5" note="Illustration">
          <div className="mt-4">
            <Bridge intro />
          </div>
        </Tile>

        <Tile project={temp} n={2} className="md:col-span-6 lg:col-span-5">
          <div className="mt-4 -mr-6 -mb-6 sm:-mr-7 sm:-mb-7">
            <Shot
              image={temp.image!}
              sizes="(min-width: 768px) 520px, 100vw"
              className="rounded-r-none rounded-b-none"
              imgClassName="aspect-[16/8] object-left-top lg:aspect-[16/6] lg:object-[0%_62%]"
            />
          </div>
        </Tile>

        <Tile project={morphic} n={3} className="md:col-span-6 lg:col-span-5">
          <p className="mt-3 text-[13px] text-muted">Private until it ships.</p>
        </Tile>

        <Plain n={4} className="md:col-span-6 lg:col-span-4" title="People I admire" to="/people">
          <ul className="mt-4 space-y-3">
            {people.map((p) => (
              <li key={p.name} className="flex items-start gap-3">
                <Initials name={p.name} />
                <div>
                  <p className="font-[600]">{p.name} <span className="font-normal text-muted">· {p.role}</span></p>
                  <p className="text-muted">{p.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </Plain>

        <Plain n={5} className="md:col-span-12 lg:col-span-3" title="Writing" to="/blog">
          {posts.length ? (
            <ul className="mt-5 space-y-3">
              {posts.slice(0, 3).map((p) => (
                <li key={p.slug}>
                  <p className="font-[600]">{p.title}</p>
                  <p className="text-[13px] text-muted [font-variant-numeric:tabular-nums]">{p.date}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-muted">Nothing here yet. Posts will show up here and in the RSS feed.</p>
          )}
          <a href="/rss.xml" className="above mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] text-muted transition-colors hover:text-ink">
            <Rss /> RSS feed
          </a>
        </Plain>
      </section>
    </>
  )
}

function Tile({ project: p, n, className = '', external, note, children }: { project: Project; n: number; className?: string; external?: boolean; note?: string; children?: ReactNode }) {
  const live = p.links[0]
  return (
    <article className={`tile intro-tile flex flex-col p-6 sm:p-7 ${className}`} style={i(n)}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[22px] leading-tight font-[650] tracking-[-0.02em] [font-stretch:108%]">
            <Link to="/projects" hash={p.slug} className="stretch">{p.name}</Link>
          </h2>
          <div className="mt-1"><Status status={p.status} year={p.year} /></div>
        </div>
        {note && <span className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted">{note}</span>}
        {external && live && (
          <a href={live.href} className="above press nudge inline-flex shrink-0 items-center gap-1 rounded-full bg-tile-2 px-3 py-1.5 text-[13px] font-[560] hover:bg-leaf hover:text-bg">
            {live.label} <ArrowUpRight />
          </a>
        )}
      </div>
      <p className="mt-2.5 max-w-[46ch] text-muted">{p.summary}</p>
      {children}
    </article>
  )
}

function Plain({ title, to, n, className = '', children }: { title: string; to: '/people' | '/blog'; n: number; className?: string; children: ReactNode }) {
  return (
    <article className={`tile intro-tile flex flex-col p-6 sm:p-7 ${className}`} style={i(n)}>
      <h2 className="flex items-center justify-between text-[22px] leading-tight font-[650] tracking-[-0.02em] [font-stretch:108%]">
        <Link to={to} className="stretch">{title}</Link>
        <ArrowRight className="tile-arrow text-muted" />
      </h2>
      {children}
    </article>
  )
}
