<script setup>
import { socials } from '../listItems'
const url = 'https://skillicons.dev/icons?i='
</script>

<template>
  <section class="w-full py-32 px-5 md:px-32">
    <h2 class="text-4xl font-league font-bold md:text-[4em] mb-14 text-center text-slate-800">
      Connect with <u>me</u>
    </h2>
    <ul class="flex justify-center gap-10 md:w-[50vw] mx-auto">
      <li v-for="(item, index) in socials" :key="index" :title="item.img">
        <a :href="item.url" target="_blank" class="group *:transition-all *:duration-100">
          <img
            :src="url + item.img.toLowerCase()"
            :alt="img"
            class="group-hover:-translate-y-3 group-hover:drop-shadow-xl"
          />
        </a>
      </li>
    </ul>
  </section>
</template>
