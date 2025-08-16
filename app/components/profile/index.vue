<script setup lang="ts">
defineProps<{ avatarSrc: string; avatarAlt: string }>();
</script>

<template>
  <div class="flex gap-4">
    <div>
      <UAvatar
        :src="avatarSrc"
        :alt="avatarAlt"
        :style="{ width: '80px', height: '80px' }"
      />
      <div class="mt-4 flex justify-center gap-2">
        <a href="https://github.com/dekonen">
          <UButton
            class="rounded-full"
            variant="soft"
            color="neutral"
            icon="i-lucide-github"
          />
        </a>

        <div>
          <UModal title="My Links">
            <UButton
              class="rounded-full"
              variant="soft"
              color="neutral"
              icon="i-lucide-ellipsis"
            />
            <template #description> Let's connect! </template>
            <template #body>
              <div class="flex gap-2 flex-col">
                <a href="https://github.com/dekonen" class="w-full" target="_blank" rel="noopener noreferrer">
                  <UButton
                    icon="i-lucide-github"
                    variant="soft"
                    color="neutral"
                    label="Github"
                    class="w-full"

                  />
                </a>
                <a class="w-full" href="https://wa.me/62895342572499?text=Halo%20saya%20tertarik%20dengan%20karya%20Anda,%20boleh%20kita%20ngobrol?" target="_blank" rel="noopener noreferrer">
                  <UButton
                    icon="i-lucide-phone"
                    variant="soft"
                    color="neutral"
                    label="Whatsapp"
                    class="w-full"
                  />
                </a>
                <a class="w-full" href="mailto:konenadjana@gmail.com">
                  <UButton
                    icon="i-lucide-mail"
                    variant="soft"
                    color="neutral"
                    label="E-mail"
                    class="w-full"

                  />
                </a>
                
              </div>
            </template>
          </UModal>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <h1 class="font-bold text-xl">Addy Konen</h1>
      <p class="text-gray-500 f0nt-semibold text-sm">Junior Web developer</p>
      <p class="text-gray-500 text-sm mt-2">
        I build things for the web. Currently
        <strong>i am seeking for fulltime software developer job</strong>.
      </p>
      <div class="flex gap-2 mt-4">
        <a href="https://wa.me/62895342572499?text=Halo%20saya%20tertarik%20dengan%20karya%20Anda,%20boleh%20kita%20proyek%20bareng?">
          <UButton class="cursor-pointer" color="primary">Hire me</UButton>
        </a>
        <UButton class="cursor-pointer" variant="outline">About me</UButton>
      </div>
    </div>
  </div>
</template>
