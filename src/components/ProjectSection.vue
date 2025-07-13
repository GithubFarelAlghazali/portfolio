<script setup>
import ProjectItem from './ProjectItem.vue'
import { projects } from '../listItems'
</script>

<template>
  <section class="w-full pt-28 px-5 md:pt-56 md:px-32">
    <h2 class="text-4xl font-league font-bold md:text-[4em] md:mb-32 text-center text-slate-800">
      Projects
    </h2>
    <div class="my-16 flex justify-center w-full flex-wrap md:flex-nowrap px-5 gap-5">
      <ProjectItem
        v-for="(project, index) in projects"
        :key="index"
        :nama="project.nama"
        :img="project.gambar"
        :deskripsi="project.deskripsi"
        :url="project.url"
      />
    </div>
  </section>
</template>
