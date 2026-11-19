<template>
  <div class="mx-auto max-w-4xl px-6 py-16">
    <div class="flex flex-col items-center text-center gap-6">
      <img
        src="/1794405718772_20261115120758.png"
        alt="Profile picture of Nova Elvira"
        class="h-40 w-40 rounded-full border-4 border-cream object-cover"
      />
      <p class="font-heading text-2xl text-vermilion">ようこそ</p>
      <h1 class="font-heading text-5xl sm:text-7xl font-bold leading-none tracking-tight">
        <span class="block text-3xl sm:text-4xl italic font-medium text-vermilion">Hi, I'm</span>
        Nova Elvira
      </h1>
      <p class="max-w-xl text-lg text-cream/90">
        “If life gives you lemons, bury them on the ground and get more lemons
        in 10 years. That's what I call investment.”
      </p>
      <div class="max-w-xl rounded-3xl bg-cream px-6 py-4 text-ink">
        <p class="font-medium">Welcome to my profile, enjoy :3</p>
      </div>
      <NuxtLink
        to="/profile"
        class="mt-2 rounded-full bg-vermilion px-6 py-3 font-bold hover:bg-pine transition-colors"
      >
        View my profile
      </NuxtLink>
    </div>
  </div>
</template>