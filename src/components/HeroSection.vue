<script setup>
import heroImg from '../../public/saya-nobg.png'
import { onMounted, ref, nextTick } from 'vue'
import { gsap } from 'gsap'

const title = 'webDeveloper'
const titleArray = title.split('')
const titleLetter = ref([])

const getRandom = (range) => {
  return Math.random() * range
}

onMounted(async () => {
  await nextTick()

  titleLetter.value.forEach((letter) => {
    gsap.from(letter, {
      opacity: 0.4,
      duration: getRandom(1.2) + 0.3,
      repeat: -1,
      yoyo: true,
      ease: 'power2.out',
    })
  })
})
</script>

<template>
  <header class="w-[100vw] h-[100vh] relative font-league">
    <article
      class="absolute right-0 left-0 md:right-28 md:left-28 bottom-0 top-0 flex flex-col md:justify-center pt-32 md:pt-0 gap-0 px-5 md:px-10 md:gap-48"
    >
      <h2
        class="text-4xl md:text-[3em] text-red-900 font-bold w-fit"
        v-split-text="{
          delay: 100,
          duration: 0.6,
          ease: 'power3.out',
          splitType: 'chars',
        }"
      >
        Hi, I am Farel
      </h2>

      <h2
        class="bg-red-900 text-white md:p-5 font-semibold md:text-xl w-fit md:rounded-3xl md:self-end text-sm rounded-xl p-2"
      >
        Web Developer & Cloud Engineer
      </h2>
    </article>
    <h1
      class="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center text-[4em] md:text-[10em] mx-auto md:-my-12 font-bold text-stroke-1 md:text-stroke-3 text-transparent text-stroke-red-900"
      ref="title"
    >
      <span
        ref="titleLetter"
        v-for="(item, index) in titleArray"
        :key="index"
        class="inline-block"
        >{{ item }}</span
      >
    </h1>
    <div class="mx-auto md:h-full absolute bottom-0 left-0 right-0 flex flex-col justify-end">
      <img :src="heroImg" alt="" class="md:h-[90%] max-w-[2/3] mx-auto" />
    </div>
  </header>
</template>
