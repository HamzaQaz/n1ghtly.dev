import { Link } from '@tanstack/react-router'
import { PageTitle } from './chrome'
import { ArrowRight } from './icons'

export function NotFound() {
  return (
    <PageTitle title="Nothing grows here">
      <p>That page doesn't exist, or it moved.</p>
      <Link to="/" className="link mt-4 inline-flex items-center gap-1.5 text-ink">
        Back to the home page <ArrowRight />
      </Link>
    </PageTitle>
  )
}
