<script setup>
import { skills } from '../listItems'
const url = 'https://skillicons.dev/icons?i='
</script>

<template>
  <section class="w-full py-28 px-5 md:px-32">
    <h2 class="text-4xl font-league font-bold md:text-[4em] mb-14 text-center text-slate-800">
      Skills
    </h2>
    <ul class="flex justify-center gap-10 w-[50vw] mx-auto flex-wrap">
      <li
        v-for="(img, index) in skills"
        :key="index"
        class="group *:transition-all *:duration-100"
        :title="img.toUpperCase()"
      >
        <img
          :src="url + img"
          :alt="img.toUpperCase()"
          class="group-hover:-translate-y-3 group-hover:drop-shadow-xl"
        />
      </li>
    </ul>
  </section>
</template>
