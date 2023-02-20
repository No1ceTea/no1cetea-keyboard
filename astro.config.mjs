import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind' 

// https://astro.build/config
export default defineConfig({
  site: 'https://no1cetea-keyboard.vercel.app/',
  integrations: [
    sitemap(),
    react(),
    image(),
    tailwind()
  ],
})