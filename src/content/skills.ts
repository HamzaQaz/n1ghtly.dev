export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'Java', 'PHP'] },
  { group: 'Frontend', items: ['React', 'Tailwind', 'Vite'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'MySQL'] },
  { group: 'Bots and mods', items: ['discord.js', 'Lavalink', 'Fabric'] },
]

/** One line on the Skills page; `meta` sits on the right and links to `href` if set. */
export type Entry = { title: string; meta?: string; href?: string }

export const experience: Entry[] = [
  { title: 'Senior Developer', meta: 'Halfservers LLC', href: 'https://halfservers.com' },
  { title: 'Project work', meta: 'My school district' },
]

export const education: Entry[] = [
  { title: 'Celina High School', meta: 'Class of 2029' },
  { title: 'AP Computer Science A', meta: 'In progress' },
]

export const certifications: Entry[] = [{ title: 'Adobe Certified Professional: Premiere Pro' }]

/** now: doing it. next: up after that. later: on the list. */
export type Stage = 'now' | 'next' | 'later'

export type Step = { stage: Stage; title: string; line: string }

export const roadmap: Step[] = [
  { stage: 'next', title: 'Certiport IT Specialist: Java', line: 'Turning the AP Java into a certification.' },
  { stage: 'later', title: 'CS1 and CS2', line: 'Intro programming, then data structures and algorithms.' },
  { stage: 'later', title: 'Study for the CCNA', line: 'Networking: how packets get from here to there.' },
]
