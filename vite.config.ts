import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: { port: 3000 },
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: { enabled: true, crawlLinks: true, failOnError: true },
      // Server routes have no component, so discovery skips them; list them explicitly.
      pages: [
        { path: '/rss.xml', prerender: { outputPath: '/rss.xml' } },
        { path: '/sitemap.xml', prerender: { outputPath: '/sitemap.xml' } },
        { path: '/404', prerender: { outputPath: '/404.html' } },
      ],
    }),
    viteReact(),
  ],
})
