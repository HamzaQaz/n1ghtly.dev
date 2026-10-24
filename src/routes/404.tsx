import { createFileRoute } from '@tanstack/react-router'
import { NotFound } from '~/components/not-found'

// Prerendered to /404.html, which Workers static assets serve for unknown paths.
export const Route = createFileRoute('/404')({
  head: () => ({ meta: [{ title: 'Not found · n1ghtly.dev' }, { name: 'robots', content: 'noindex' }] }),
  component: NotFound,
})
