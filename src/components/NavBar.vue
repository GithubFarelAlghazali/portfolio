<script setup>
import { socials } from '../listItems'
const url = 'https://skillicons.dev/icons?i='
</script>

<template>
  <nav class="w-full fixed top-0 left-0 right-0">
    <h2 class="font-league font-bold text-slate-800">Farel<u>ghazali</u></h2>
    <ul class="flex justify-center gap-10">
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
  </nav>
</template>
