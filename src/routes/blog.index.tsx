import { Link, createFileRoute } from '@tanstack/react-router'
import { PageTitle } from '~/components/chrome'
import { ArrowRight, Rss } from '~/components/icons'
import { posts } from '~/content/posts'
import { site } from '~/content/site'

export const Route = createFileRoute('/blog/')({
  head: () => ({ meta: [{ title: `Blog · ${site.name}` }, { name: 'description', content: `Writing by ${site.name}.` }] }),
  component: Blog,
})

function Blog() {
  return (
    <>
      <PageTitle title="Blog">
        <p>Whatever I've been working out, at whatever length it takes.</p>
      </PageTitle>
      {posts.length ? (
        <ul className="divide-y divide-line border-y border-line">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group grid gap-1 py-6 sm:grid-cols-[9rem_1fr_auto] sm:items-baseline sm:gap-6">
                <time dateTime={p.date} className="text-[13px] text-muted [font-variant-numeric:tabular-nums]">{p.date}</time>
                <span>
                  <span className="block text-[20px] font-[620] tracking-[-0.015em] transition-colors group-hover:text-leaf">{p.title}</span>
                  {p.summary && <span className="mt-1 block text-muted">{p.summary}</span>}
                </span>
                <ArrowRight className="hidden text-muted transition-transform duration-300 group-hover:translate-x-1 sm:block" />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="tile max-w-xl p-8">
          <p className="text-[20px] font-[620] tracking-[-0.015em]">Nothing here yet.</p>
          <p className="mt-2 text-muted">Posts will show up here and in the RSS feed.</p>
          <a href="/rss.xml" className="press mt-5 inline-flex h-9 items-center gap-1.5 rounded-full bg-tile-2 px-3.5 text-[14px] font-[560] hover:bg-leaf hover:text-bg">
            <Rss /> RSS feed
          </a>
        </div>
      )}
    </>
  )
}
