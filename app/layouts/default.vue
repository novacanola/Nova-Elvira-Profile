<template>
  <div class="min-h-screen flex flex-col bg-ink text-cream font-body">
    <AppNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <footer class="border-t-2 border-cream/30 py-6 text-center text-sm text-cream/70">
      &copy; {{ new Date().getFullYear() }} Nova Elvira. Built with Nuxt and Tailwind CSS.
    </footer>
  </div>
</template>