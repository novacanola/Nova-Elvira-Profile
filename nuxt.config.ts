export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: { cssPath: '~/assets/css/main.css' },
  app: {
    head: {
      title: 'Nova Elvira | Personal Profile',
      meta: [{ name: 'description', content: 'Personal profile website built with Nuxt and Tailwind CSS.' }],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/avatar.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500;1,700&family=Hanken+Grotesk:wght@400;500;700&family=Shippori+Mincho:wght@500;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap'
        }
      ]
    }
  }
})