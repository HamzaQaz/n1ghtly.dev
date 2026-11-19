import { createFileRoute } from '@tanstack/react-router'
import type { CSSProperties, ReactNode } from 'react'
import { PageTitle } from '~/components/chrome'
import { type Entry, certifications, education, experience, roadmap, skills } from '~/content/skills'
import { site } from '~/content/site'

export const Route = createFileRoute('/skills')({
  head: () => ({
    meta: [{ title: `Skills · ${site.name}` }, { name: 'description', content: `${site.name}: skills, experience, education, and what's next.` }],
  }),
  component: Skills,
})

const label = { now: 'Now', next: 'Next', later: 'Later' }
const tone = { now: 'text-leaf', next: 'text-bud', later: 'text-muted' }
const stepTitle = 'text-[22px] leading-tight font-[650] tracking-[-0.02em] [font-stretch:108%]'

function Skills() {
  return (
    <>
      <PageTitle title="Skills">
        <p>What I work with, where I've learned it, and what's next.</p>
      </PageTitle>
      <div className="grid gap-14 sm:gap-16">
        <Section title="Skills">
          <dl className="grid gap-4">
            {skills.map((g) => (
              <div key={g.group} className="grid items-baseline gap-2 sm:grid-cols-[9rem_1fr]">
                <dt className="text-[15px] text-muted">{g.group}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span key={s} className="rounded-full border border-line bg-tile px-3 py-1 text-[14px] font-[560]">{s}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
        <Section title="Experience"><Entries list={experience} /></Section>
        <Section title="Education"><Entries list={education} /></Section>
        <Section title="Certifications"><Entries list={certifications} /></Section>
        <Section title="What's next">
          <ol className="road">
            {roadmap.map((s, i) => (
              <li key={s.title} className="reveal" style={{ '--i': i } as CSSProperties}>
                <span className="road-dot" data-stage={s.stage} aria-hidden />
                <p className={`road-stage ${tone[s.stage]}`}>{label[s.stage]}</p>
                <h3 className={stepTitle}>{s.title}</h3>
                <p className="mt-1.5 text-[17px] leading-[1.55] text-muted">{s.line}</p>
              </li>
            ))}
            <li className="road-more reveal">
              <span className="road-dot" aria-hidden />
              <p className="road-stage text-muted">Then</p>
              <h3 className={`${stepTitle} text-muted`}>And more</h3>
              <p className="mt-1.5 text-[17px] leading-[1.55] text-muted/70">I'll add it when I get there.</p>
            </li>
          </ol>
        </Section>
      </div>
    </>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="reveal grid gap-5 border-t border-line pt-7 lg:grid-cols-12">
      <h2 className="text-[17px] font-[640] tracking-[-0.01em] lg:col-span-3">{title}</h2>
      <div className="lg:col-span-9 lg:max-w-[720px]">{children}</div>
    </section>
  )
}

function Entries({ list }: { list: Entry[] }) {
  return (
    <ul className="divide-y divide-line">
      {list.map((e) => (
        <li key={e.title} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5 first:pt-0 last:pb-0">
          <span className="text-[19px] font-[620] tracking-[-0.015em]">{e.title}</span>
          {e.meta && <span className="text-[15px] text-muted">{e.href ? <a href={e.href} className="link">{e.meta}</a> : e.meta}</span>}
        </li>
      ))}
    </ul>
  )
}
