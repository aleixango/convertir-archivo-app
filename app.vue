<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.preference === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <div class="mx-auto grid min-h-screen max-w-screen-xl grid-rows-[60px,1fr,60px] px-6">
    <header class="flex items-center">
      <nav class="flex-1">
        <a class="text-2xl" href="/"><b>Convertir</b> Archivo</a>
      </nav>
      <UButton
        class="flex-none"
        variant="soft"
        aria-label="Theme"
        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
        @click="isDark = !isDark"
      ></UButton>
    </header>
    <main>
      <NuxtPage></NuxtPage>
    </main>
    <footer class="flex items-center justify-center">
      <p>Made with ❤️ by Aleix Anguita</p>
    </footer>
  </div>
</template>

<style>
body {
  color-scheme: dark light;
}
</style>
