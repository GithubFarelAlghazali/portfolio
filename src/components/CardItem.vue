<script setup>
const { nama, deskripsi, img, url } = defineProps(['nama', 'deskripsi', 'img', 'url'])
</script>

<template>
  <a :href="url" target="_blank">
    <figure
      class="aspect-video md:aspect-3/2 md:w-[22em] shadow-2xl overflow-hidden rounded-2xl group text-white *:transition-all duration-100 relative md:text-2xl"
    >
      <img :src="img" alt="" class="w-full group-hover:scale-110 group-hover:brightness-50" />
      <figcaption
        class="w-full translate-y-10 group-hover:-translate-y-20 -py-3 px-5 drop-shadow-xl transition-all duration-300"
      >
        <h3 class="md:text-4xl text-2xl font-league font-bold">{{ nama }}</h3>
        <p>{{ deskripsi }}</p>
      </figcaption>
    </figure>
  </a>
</template>
