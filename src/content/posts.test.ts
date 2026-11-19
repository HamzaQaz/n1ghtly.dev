import { expect, test } from 'vitest'
import { parsePost } from './posts'

test('parses frontmatter and markdown', () => {
  const p = parsePost('hello', '---\ntitle: "Hello"\ndate: 2026-10-24\nsummary: First one\n---\n# Hi\n\nA *post*.')
  expect(p).toMatchObject({ slug: 'hello', title: 'Hello', date: '2026-10-24', summary: 'First one', draft: false })
  expect(p.html).toContain('<em>post</em>')
})

test('handles CRLF and draft flag', () => {
  const p = parsePost('d', '---\r\ntitle: D\r\ndate: 2026-01-02\r\ndraft: true\r\n---\r\nbody')
  expect(p.draft).toBe(true)
})

test('rejects missing title or bad date', () => {
  expect(() => parsePost('x', '---\ntitle: X\ndate: 24/10/2026\n---\n')).toThrow(/date/)
  expect(() => parsePost('x', 'no frontmatter')).toThrow(/frontmatter/)
})

test('post template stays valid', async () => {
  const raw = (await import('./post-template.md?raw')).default
  expect(parsePost('template', raw)).toMatchObject({ title: 'Your post title', draft: true })
})
