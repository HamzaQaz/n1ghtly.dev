import { createFileRoute } from '@tanstack/react-router'
import { posts } from '~/content/posts'
import { site } from '~/content/site'

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function rss() {
  const items = posts
    .map((p) => {
      const url = `${site.url}/blog/${p.slug}`
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(`${p.date}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${esc(p.summary)}</description>
    </item>`
    })
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${site.domain}</title>
    <link>${site.url}/</link>
    <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${esc(`${site.name}, ${site.role.toLowerCase()}.`)}</description>
    <language>en</language>
${items}
  </channel>
</rss>
`
}

export const Route = createFileRoute('/rss.xml')({
  server: {
    handlers: {
      GET: () => new Response(rss(), { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } }),
    },
  },
})
