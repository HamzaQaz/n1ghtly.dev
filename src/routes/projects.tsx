import { createFileRoute } from '@tanstack/react-router'
import { Bridge } from '~/components/bridge'
import { PageTitle, Status } from '~/components/chrome'
import { ArrowUpRight } from '~/components/icons'
import { Shot } from '~/components/shot'
import { projects } from '~/content/projects'
import { site } from '~/content/site'

export const Route = createFileRoute('/projects')({
  head: () => ({
    meta: [
      { title: `Projects · ${site.name}` },
      { name: 'description', content: `What ${site.name} has built: ${projects.map((p) => p.name).join(', ')}.` },
    ],
  }),
  component: Projects,
})

function Projects() {
  return (
    <>
      <PageTitle title="Projects">
        <p>Things I've built, plus one that's still growing.</p>
      </PageTitle>
      <div className="space-y-3">
        {projects.map((p) => {
          const visual = p.image ? (
            <Shot image={p.image} sizes="(min-width: 1024px) 680px, 100vw" imgClassName="aspect-[16/10] object-left-top" />
          ) : p.slug === 'dmcl' ? (
            <Bridge />
          ) : null
          return (
            <section key={p.slug} id={p.slug} aria-labelledby={`${p.slug}-name`} className="tile reveal grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10">
              <div className={visual ? 'lg:col-span-5' : 'lg:col-span-8'}>
                <h2 id={`${p.slug}-name`} className="text-[30px] leading-tight font-[650] tracking-[-0.025em] [font-stretch:110%]">{p.name}</h2>
                <div className="mt-2"><Status status={p.status} year={p.year} /></div>
                <p className="mt-5 text-[17px] leading-[1.6]">{p.summary}</p>
                <p className="mt-3 leading-[1.65] text-muted">{p.details}</p>
                <p className="mt-5 text-[14px] text-muted">
                  <span className="sr-only">Built with: </span>
                  {p.stack.join(' · ')}
                </p>
                {p.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} className="press nudge inline-flex h-9 items-center gap-1.5 rounded-full bg-tile-2 px-3.5 text-[14px] font-[560] hover:bg-leaf hover:text-bg">
                        {l.label} <ArrowUpRight />
                      </a>
                    ))}
                  </div>
                )}
              </div>
              {visual && <div className="lg:col-span-7">{visual}</div>}
            </section>
          )
        })}
      </div>
    </>
  )
}
