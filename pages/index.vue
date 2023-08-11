<script setup lang="ts">
const colorMode = useColorMode();
const isDarkMode = computed(() => colorMode.preference === "dark");
</script>

<template>
  <div class="flex h-full flex-col items-center">
    <h1
      class="mt-14 flex flex-col text-center text-6xl font-bold tracking-tight md:mt-28 md:flex-row md:text-6xl lg:text-7xl xl:text-8xl"
    >
      <span class="first-highlight">
        <span>Copia. </span>
      </span>
      <span class="second-highlight">
        <span>Pega. </span>
      </span>
      <span class="third-highlight">
        <span>Convierte. </span>
      </span>
    </h1>
    <h2
      class="mx-0 mt-8 max-w-lg text-center text-base md:mx-44 md:mt-14 md:max-w-none lg:mx-52 lg:text-xl xl:mx-36 xl:text-2xl"
    >
      Convertir Archivo ayuda a profesionales a transformar texto y archivos entre diferentes formatos, aumentado su
      productividad
    </h2>
    <NuxtLink
      to="/convertir"
      class="bg-primary-500 hover:bg-primary-600 mt-10 rounded-md px-8 py-3 text-xl md:text-2xl"
    >
      Empezar
    </NuxtLink>
    <img v-if="isDarkMode" src="/img/app_dark.webp" class="app-view my-12 rounded-lg border-2 border-gray-300 py-4" />
    <img v-else src="/img/app.webp" class="app-view my-12 rounded-lg border-2 border-gray-300 py-4" />
  </div>
</template>

<style>
body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
}
.app-view {
  width: 1200px;
  height: 680px;
  object-fit: cover;
}
span.first-highlight {
  position: relative;
  display: block;
}
span.first-highlight::before {
  content: "Copia. ";
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  text-align: center;
}
span.first-highlight span {
  @apply bg-primary-500 bg-clip-text text-transparent;
  position: relative;
  z-index: 1;
  animation: change-color-first-highlight 4s infinite;
}
span.second-highlight {
  position: relative;
  display: block;
}
span.second-highlight::before {
  content: "Pega.";
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  text-align: center;
}
span.second-highlight span {
  @apply text-primary-500;
  position: relative;
  z-index: 1;
  animation: change-color-second-highlight 4s infinite;
}

span.third-highlight {
  position: relative;
  display: block;
}
span.third-highlight::before {
  content: "Convierte.";
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  text-align: center;
}
span.third-highlight span {
  @apply text-primary-500;
  position: relative;
  z-index: 1;
  animation: change-color-third-highlight 4s infinite;
}
@keyframes change-color-first-highlight {
  0%,
  16.667%,
  100% {
    opacity: 1;
  }
  33.333%,
  83.333% {
    opacity: 0;
  }
}

@keyframes change-color-second-highlight {
  0%,
  100% {
    opacity: 0;
  }
  33.333%,
  50% {
    opacity: 1;
  }
  16.667%,
  66.667% {
    opacity: 0;
  }
}

@keyframes change-color-third-highlight {
  0%,
  50%,
  100% {
    opacity: 0;
  }
  66.667%,
  83.333% {
    opacity: 1;
  }
}
</style>
