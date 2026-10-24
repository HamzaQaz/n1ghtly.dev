import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowRight } from '~/components/icons'
import { posts } from '~/content/posts'
import { site } from '~/content/site'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug)
    if (!post) throw notFound()
    return post
  },
  head: ({ loaderData: p }) => ({
    meta: p ? [{ title: `${p.title} · ${site.name}` }, { name: 'description', content: p.summary }, { property: 'og:type', content: 'article' }] : [],
  }),
  component: PostPage,
})

function PostPage() {
  const p = Route.useLoaderData()
  return (
    <article className="mx-auto max-w-[68ch] pt-10 sm:pt-16">
      <Link to="/blog" className="inline-flex items-center gap-1.5 text-[14px] text-muted hover:text-ink">
        <ArrowRight className="rotate-180" /> All posts
      </Link>
      <h1 className="mt-6 text-[clamp(34px,5vw,52px)] leading-[1.05] font-[680] tracking-[-0.03em] [font-stretch:110%]">{p.title}</h1>
      <time dateTime={p.date} className="mt-3 block text-[14px] text-muted [font-variant-numeric:tabular-nums]">{p.date}</time>
      <div className="prose mt-10" dangerouslySetInnerHTML={{ __html: p.html }} />
    </article>
  )
}
