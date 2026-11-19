import { createFileRoute } from '@tanstack/react-router'
import { Initials, PageTitle, Tag } from '~/components/chrome'
import { people } from '~/content/people'
import { site } from '~/content/site'

export const Route = createFileRoute('/people')({
  head: () => ({ meta: [{ title: `People · ${site.name}` }, { name: 'description', content: `People ${site.name} admires.` }] }),
  component: People,
})

function People() {
  return (
    <>
      <PageTitle title="People I admire">
        <p>No strategic reason for this page, which is the point.</p>
      </PageTitle>
      <ul className="grid gap-3 md:grid-cols-2">
        {people.map((p) => (
          <li key={p.name} className="tile reveal flex gap-4 p-6 sm:p-8">
            <Initials name={p.name} />
            <div>
              <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[20px] font-[620] tracking-[-0.015em]">
                {p.name}
                {p.title && <Tag variant={p.tag}>{p.title}</Tag>}
              </p>
              <p className="text-[14px] text-muted">{p.role}</p>
              <p className="mt-3 text-[17px] leading-[1.55]">{p.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
