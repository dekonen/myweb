<script setup lang="ts">
import AboutServiceCard from "./service-card.vue";
</script>

<template>
  <div class="flex flex-col gap-4">
    <section id="me">
      <p class="mb-2 text-gray-600">
        <strong> Hi! </strong>
        I am Konen, my fullname is I Made Addy Konen Adjana. I am graduated from
        SMK Negeri 1 Denpasar at 2023. Have 2 times internship experience in web
        application development. At internship moment, I work with my friends
        and senior using Laravel to build web applications.
      </p>
      <p class="text-gray-600">
        I am a Frontend Web Developer with good knowledge of backend
        programming. I love to create web applications and websites. My current
        strengths are in Vue.js, Nuxt.js, Supabase and the TypeScript Ecosystem.
        I am also <strong>familiar with React.</strong> I use PHP, Laravel,
        Node.js, and Express for backend development. I use Google Appscript to
        create addon on Google Sheets and make a form like Google Form but with
        custom features.
      </p>
    </section>
    <section id="service">
      <h2 class="text-gray-800 font-bold mb-2">What I Can Do</h2>
      <div class="grid grid-cols-2 gap-4">
        <AboutServiceCard
          title="Web development"
          description="Create web applications to help businesses grow and make management easier."
          icon="i-lucide-code"
        />
        <AboutServiceCard
          title="Google Workspace Addon"
          description="Create Google Workspace Addons to enhance productivity and collaboration."
          icon="i-lucide-puzzle"
        />
      </div>
    </section>
  </div>
</template>
