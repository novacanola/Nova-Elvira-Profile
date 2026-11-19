<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Profile', to: '/profile' }
]
</script>

<template>
  <header class="border-b-2 border-cream/30">
    <nav class="mx-auto max-w-4xl flex items-center justify-between px-6 py-4">
      <NuxtLink to="/" class="flex items-center gap-2 font-heading text-xl font-bold">
        <!-- little red circle, like the one in the inspo -->
        <span class="h-3 w-3 rounded-full bg-vermilion"></span>
        Nova Elvira
      </NuxtLink>
      <ul class="flex gap-3">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="rounded-full px-4 py-1 hover:underline"
            active-class="bg-vermilion font-bold"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>