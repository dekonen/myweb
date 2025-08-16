<script setup lang="ts">
import MyPic from "/images/mypic.jpg";
</script>
<template>
  <div class="max-w-[1024px] xl:max-w-[1200px] mx-auto p-4 flex-col gap-4 flex">
    <ProfileBanner />
    <Profile avatar-alt="Addy Konen" :avatar-src="MyPic" />
    <slot />
  </div>
</template>
