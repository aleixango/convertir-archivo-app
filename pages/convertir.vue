<script setup lang="ts"></script>

<template>
  <article class="h-full w-full py-10 md:mx-auto md:py-20">
    <div
      class="mx-auto grid h-full max-w-lg grid-cols-1 grid-rows-[1fr,0.1fr,1fr] rounded-xl text-black md:max-w-none md:grid-cols-[1fr,0.05fr,1fr] md:grid-rows-1 md:gap-6 lg:gap-12"
    >
      <section class="flex flex-col rounded-lg border-2 border-black bg-white dark:border-none">
        <h2 class="bg-primary-400 flex-none rounded-t-lg border-b-2 border-black py-4 text-center text-lg font-medium">
          Texto a convertir
        </h2>
        <div class="flex-1 rounded-b-lg"></div>
      </section>

      <div class="flex items-center justify-center md:flex-none">
        <span class="hover:text-primary-500 dark:hover:text-primary-500 hidden text-9xl dark:text-white md:inline"
          >&blacktriangleright;</span
        >
        <span class="hover:text-primary-500 dark:hover:text-primary-500 inline text-7xl dark:text-white md:hidden"
          >&blacktriangledown;</span
        >
      </div>

      <section class="flex flex-col rounded-lg border-2 border-black bg-white dark:border-none">
        <h2 class="bg-primary-200 flex-none rounded-t-lg border-b-2 border-black py-4 text-center text-lg font-medium">
          Resultado
        </h2>
        <div class="flex-1 rounded-b-lg"></div>
      </section>
    </div>
  </article>
</template>
