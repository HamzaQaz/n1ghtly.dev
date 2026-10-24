import { marked } from 'marked'

export type Post = { slug: string; title: string; date: string; summary: string; html: string }

// Minimal frontmatter: `key: value` lines between --- fences. Body is markdown.
export function parsePost(slug: string, raw: string): Post & { draft: boolean } {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw)
  if (!m) throw new Error(`posts/${slug}.md: missing --- frontmatter ---`)
  const meta: Record<string, string> = {}
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(':')
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '')
  }
  if (!meta.title || !/^\d{4}-\d{2}-\d{2}$/.test(meta.date ?? ''))
    throw new Error(`posts/${slug}.md: needs title and date (yyyy-mm-dd)`)
  return {
    slug,
    title: meta.title,
    date: meta.date,
    summary: meta.summary ?? '',
    draft: meta.draft === 'true',
    html: marked.parse(m[2], { async: false }),
  }
}

const files = import.meta.glob<string>('./posts/*.md', { query: '?raw', import: 'default', eager: true })

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => parsePost(path.slice(path.lastIndexOf('/') + 1, -3), raw))
  .filter((p) => !p.draft)
  .sort((a, b) => b.date.localeCompare(a.date))
