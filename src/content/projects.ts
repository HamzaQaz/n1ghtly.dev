export type Status = 'shipped' | 'building' | 'paused'

export type Image = {
  src: string
  /** Same picture at 1200w, for phones and small tiles. */
  small: string
  alt: string
  width: number
  height: number
}

export type Project = {
  slug: string
  name: string
  year: number
  status: Status
  summary: string
  details: string
  stack: string[]
  links: { label: string; href: string }[]
  image?: Image
}

// Order is display order: strongest work first.
export const projects: Project[] = [
  {
    slug: 'couplet',
    name: 'Couplet',
    year: 2026,
    status: 'shipped',
    summary: 'A free US radar viewer for storm enthusiasts. It decodes NEXRAD data in the browser.',
    details:
      'Couplet reads Level II and Level III radar data on the client and draws it live. You get a national mosaic, a single-site view, a models view (HRRR, NAM, GFS, ECMWF), overlays and tools. You can also save places and get push alerts.',
    stack: ['TypeScript', 'React 19', 'MapLibre', 'Web Push'],
    links: [{ label: 'Open Couplet', href: 'https://couplet.n1ghtly.dev' }],
    image: {
      src: '/work/couplet.webp',
      small: '/work/couplet-sm.webp',
      alt: 'Couplet showing the live US radar mosaic, with active weather alerts listed on the right.',
      width: 2400,
      height: 1500,
    },
  },
  {
    slug: 'dmcl',
    name: 'dmcl',
    year: 2026,
    status: 'shipped',
    summary: 'A Fabric mod that connects Minecraft chat to Discord, in both directions.',
    details:
      'It runs on Fabric 1.21.1, server side. Each player posts to Discord under their own name, with their skin as the avatar. Pings, replies, edits, attachments and emoji go both ways, and players link their accounts with a one-time code. Joins, deaths and advancements show up as embeds. The bridge itself is plain JVM code with a hexagonal layout and about 85 tests.',
    stack: ['Java', 'Fabric', 'JDA'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/HamzaQaz/dmcl' }],
  },
  {
    slug: 'temperature-alarms',
    name: 'Temperature Alarms',
    year: 2026,
    status: 'shipped',
    summary: 'Watches ESP8266 temperature probes and emails you when a reading goes out of range.',
    details:
      'I reworked the web interface and SQL database for these probes in React. NodeMCU boards with DS18B20 sensors report every 30 minutes. The app keeps track of devices and locations, stores the history, and sends an email when a reading crosses its threshold.',
    stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind', 'Express', 'MariaDB'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/HamzaQaz/Temperature-Alarms-React' }],
    image: {
      src: '/work/temperature-alarms.webp',
      small: '/work/temperature-alarms-sm.webp',
      alt: 'The Temperature Alarms dashboard: device counts, then closets sorted worst first, led by one in Hot critical.',
      width: 2400,
      height: 1500,
    },
  },
  {
    slug: 'morphicversions',
    name: 'MorphicVersions',
    year: 2026,
    status: 'building',
    summary: 'A PHP extension for the Pterodactyl game server panel.',
    details: 'It is built on Blueprint, the extension framework for Pterodactyl. The code stays private until it is done.',
    stack: ['PHP', 'Pterodactyl', 'Blueprint'],
    links: [],
  },
]
