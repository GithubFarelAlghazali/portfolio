<script setup>
import heroImg from '../../public/saya-kotak-transparan.png'
import { ref, onMounted } from 'vue'

const title = 'webDeveloper'
const titleArray = title.split('')
const pulseAnimate = ref([])

onMounted(() => {
  pulseAnimate.value = titleArray.map(() => {
    const duration = Math.random() * 1000 + 500
    const delay = Math.random() * 500
    return {
      animation: `pulse ${duration}ms ease-in-out infinite`,
      animationDelay: `${delay}ms`,
    }
  })
})
</script>

<template>
  <header class="w-[100vw] h-[100vh] relative font-league">
    <article
      class="absolute right-0 left-0 md:right-28 md:left-28 bottom-0 top-0 flex flex-col md:justify-center pt-32 md:pt-0 gap-0 px-5 md:px-10 md:gap-48"
    >
      <h2 class="text-4xl md:text-[3em] text-blue-900 font-bold">Hi, I am Farel</h2>

      <h2
        class="bg-blue-900 text-white md:p-5 font-semibold md:text-xl w-fit md:rounded-3xl md:self-end text-sm rounded-xl p-2"
      >
        Web Developer & Cloud Engineer
      </h2>
    </article>
    <h1
      class="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center text-[3em] md:text-[10em] mx-auto md:-my-12 font-bold text-stroke md:text-stroke-3 text-transparent text-stroke-blue-900"
      ref="title"
    >
      <span
        v-for="(item, index) in titleArray"
        :key="index"
        class="inline-block"
        :style="pulseAnimate[index]"
        >{{ item }}</span
      >
    </h1>
    <div class="mx-auto md:h-full absolute bottom-0 left-0 right-0 md:inline-block">
      <img :src="heroImg" alt="" class="md:h-full max-w-full mx-auto" />
    </div>
  </header>
</template>
