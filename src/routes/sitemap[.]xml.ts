import { createFileRoute } from '@tanstack/react-router'
import { posts } from '~/content/posts'
import { site } from '~/content/site'

const paths = ['/', '/projects', '/blog', '/people', '/skills', '/bio', ...posts.map((p) => `/blog/${p.slug}`)]

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: () =>
        new Response(
          `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${site.url}${p === '/' ? '/' : p}</loc></url>`).join('\n')}
</urlset>
`,
          { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
        ),
    },
  },
})
