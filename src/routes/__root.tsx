/// <reference types="vite/client" />
import { HeadContent, Outlet, Scripts, createRootRoute, useRouterState } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import appCss from '~/styles.css?url'
import monaSans from '@fontsource-variable/mona-sans/files/mona-sans-latin-standard-normal.woff2?url'
import { Footer, Header } from '~/components/chrome'
import { Consent } from '~/components/consent'
import { Fireflies } from '~/components/fireflies'
import { NotFound } from '~/components/not-found'
import { site } from '~/content/site'

// Runs before paint: pinned theme, skip the intro once it has played this session, and
// mark each image when it has fully loaded so CSS can fade it in instead of painting in strips.
const boot = `(()=>{const d=document.documentElement;d.classList.add('js');try{const t=localStorage.getItem('theme');if(t==='light'||t==='dark')d.dataset.theme=t;if(sessionStorage.getItem('swept'))d.dataset.swept=''}catch(e){}const m=e=>{const t=e.target;if(t&&t.tagName==='IMG')t.dataset.loaded=''};document.addEventListener('load',m,true);document.addEventListener('error',m,true)})()`

const gtmId = 'GTM-T7FPXJV6'
// Google Consent Mode: analytics is denied until the visitor accepts (see components/consent.tsx).
const consent = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});try{if(localStorage.getItem('consent')==='granted')gtag('consent','update',{analytics_storage:'granted'})}catch(e){}`
const gtm = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}')`

const description = `${site.name}, ${site.role.toLowerCase()}. Projects, writing, and people worth admiring.`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: `${site.name} · ${site.role}` },
      { name: 'description', content: description },
      { name: 'author', content: site.name },
      { name: 'theme-color', content: '#060f0a', media: '(prefers-color-scheme: dark)' },
      { name: 'theme-color', content: '#f2f6f3', media: '(prefers-color-scheme: light)' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: site.domain },
      { property: 'og:title', content: `${site.name} · ${site.role}` },
      { property: 'og:description', content: description },
      { property: 'og:image', content: `${site.url}/work/couplet.webp` },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preload', href: monaSans, as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'alternate', type: 'application/rss+xml', title: `${site.domain} posts`, href: '/rss.xml' },
    ],
    scripts: [{ children: consent }, { children: gtm }, { children: boot }],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
})

function RootComponent() {
  // The intro plays once per session: it ends when the last dmcl chat line lands,
  // or as soon as the visitor navigates anywhere, so returning home never replays it.
  const path = useRouterState({ select: (s) => s.location.pathname })
  const firstPath = useRef(path)
  useEffect(() => {
    const done = () => {
      document.documentElement.dataset.swept = ''
      sessionStorage.setItem('swept', '1')
    }
    if (path !== firstPath.current) return done()
    const onEnd = (e: AnimationEvent) => {
      if (e.animationName === 'msg-in' && (e.target as HTMLElement).hasAttribute('data-last')) done()
    }
    document.addEventListener('animationend', onEnd)
    return () => document.removeEventListener('animationend', onEnd)
  }, [path])
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <Fireflies />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-tile focus:px-4 focus:py-2">
          Skip to content
        </a>
        <Header />
        <main id="main" className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <Outlet />
        </main>
        <Footer />
        <Consent />
        <Scripts />
      </body>
    </html>
  )
}
