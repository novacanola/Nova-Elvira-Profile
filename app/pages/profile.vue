<script setup lang="ts">
const info = [
  { label: 'Name', value: 'Nova Elvira' },
  { label: 'Location', value: 'Butuan City' },
  { label: 'Occupation', value: 'Web Developer (Frontend)' },
  { label: 'Email', value: 'ndelvira@example.com' }
]

const education = [
  {
    school: 'Caraga State University',
    program: 'Bachelor of Science in Information Technology',
    college: 'College of Computing and Information Sciences',
    year: '4th year'
  }
]

const skills = ['Frontend development', 'Python coding', 'Vibe coding']

const interests = [
  'Video games',
  'Roleplaying',
  'Music (Fall Out Boy, early 2000s pop punk bands)',
  'K-pop',
  'Historical / period dramas',
  'Romance movies'
]

const hobbies = ['Gaming', 'Writing', 'Coding', 'Drawing', 'Sleeping', 'Slacking off']
</script>

<template>
  <div class="mx-auto max-w-4xl px-6 py-12">
    <div class="mb-10 flex items-center gap-5">
      <img
        src="/1794405718772_20261115120758.png"
        alt="Picture of Nova Elvira"
        class="h-20 w-20 rounded-full border-4 border-cream object-cover"
      />
      <div>
        <h1 class="font-heading text-3xl font-bold">
          My Profile
          <span class="ml-2 text-lg text-vermilion">プロフィール</span>
        </h1>
        <p class="text-cream/80">A little more about who I am.</p>
      </div>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <ProfileCard title="Personal Information" jp="自己紹介">
        <dl class="space-y-2">
          <div v-for="item in info" :key="item.label" class="flex gap-3">
            <dt class="w-24 shrink-0 font-bold text-pine">{{ item.label }}</dt>
            <dd class="break-words">{{ item.value }}</dd>
          </div>
        </dl>
      </ProfileCard>

      <ProfileCard title="Educational Background" jp="学歴">
        <ul class="space-y-4">
          <li v-for="e in education" :key="e.school">
            <p class="font-bold">{{ e.school }}</p>
            <p>{{ e.program }}</p>
            <p>{{ e.college }}</p>
            <p class="text-sm text-pine">{{ e.year }}</p>
          </li>
        </ul>
      </ProfileCard>

      <ProfileCard title="Skills and Interests" jp="スキル">
        <p class="mb-2 font-bold text-pine">Skills</p>
        <div class="mb-4 flex flex-wrap gap-2">
          <span v-for="s in skills" :key="s" class="rounded-full bg-pine px-3 py-1 text-sm font-medium text-cream">{{ s }}</span>
        </div>
        <p class="mb-2 font-bold text-pine">Interests</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="i in interests" :key="i" class="rounded-full bg-vermilion px-3 py-1 text-sm font-medium text-cream">{{ i }}</span>
        </div>
      </ProfileCard>

      <ProfileCard title="Hobbies" jp="趣味">
        <ul class="list-inside list-disc space-y-1">
          <li v-for="h in hobbies" :key="h">{{ h }}</li>
        </ul>
      </ProfileCard>
    </div>

    <div class="mt-10 text-center">
      <NuxtLink to="/" class="hover:underline">&larr; Back to Home</NuxtLink>
    </div>
  </div>
</template>