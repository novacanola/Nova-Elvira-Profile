<script setup lang="ts">
// jp is the small Japanese label beside the title
defineProps<{ title: string; jp?: string }>()
</script>

<template>
  <section class="rounded-3xl bg-cream p-6 text-ink">
    <h2 class="mb-4 flex items-baseline gap-3 font-heading text-2xl font-bold text-vermilion">
      {{ title }}
      <span v-if="jp" class="text-sm font-medium text-pine">{{ jp }}</span>
    </h2>
    <slot />
  </section>
</template>