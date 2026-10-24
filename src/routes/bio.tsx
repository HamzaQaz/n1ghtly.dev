import { Link, createFileRoute } from '@tanstack/react-router'
import { PageTitle } from '~/components/chrome'
import { site } from '~/content/site'

export const Route = createFileRoute('/bio')({
  head: () => ({
    meta: [
      { title: `Bio · ${site.name}` },
      { name: 'description', content: `${site.name}, ${site.role.toLowerCase()}. Writes and builds as ${site.handle}.` },
    ],
  }),
  component: Bio,
})

function Bio() {
  const facts = [
    ['Name', site.name],
    ['Handle', site.handle],
    ['GitHub', <a href={site.githubUrl} className="link">{site.github}</a>],
    ['Email', <a href={`mailto:${site.email}`} className="link">{site.email}</a>],
  ] as const
  return (
    <>
      <PageTitle title={site.name}>
        <p>{site.role}. Writes and builds as {site.handle}.</p>
      </PageTitle>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="prose lg:col-span-7">
          <p>I build across the stack: the part people click, and the part that answers it.</p>
          <p>
            This site is where things end up: what I make in <Link to="/projects">projects</Link>, what I work out in
            the <Link to="/blog">blog</Link>, and the people who changed how I do any of it in <Link to="/people">people</Link>.
          </p>
          <p>
            Elsewhere I'm <a href={site.githubUrl}>{site.github} on GitHub</a>, and you can reach me at{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
        <dl className="tile self-start p-6 sm:p-8 lg:col-span-5">
          {facts.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-6 border-b border-line py-3 first:pt-0 last:border-0 last:pb-0">
              <dt className="text-muted">{k}</dt>
              <dd className="text-right">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  )
}
