<script setup>
import CardItem from './CardItem.vue'
import { ref, watch } from 'vue'
import { certificates } from '../listItems'

const type = ref('competition')
const output = ref(certificates.competition)

watch(type, (newType) => {
  if (newType == 'competition') {
    output.value = certificates.competition
  } else {
    output.value = certificates.language
  }
})
</script>

<template>
  <section class="w-full py-28 px-5 md:py-56 md:px-32 bg-blue-900 text-white">
    <h2 class="text-4xl font-league font-bold md:text-[4em] mb-10 md:mb-32 text-center">
      Certificates
    </h2>
    <div
      class="w-fit rounded-xl shadow-xl mx-auto flex justify-center overflow-hidden font-league font-bold md:text-xl md:*:p-3 *:p-2 *:cursor-pointer *:transition-all *:duration-100"
    >
      <label :class="type == 'competition' ? 'active' : ''" for="com">Competition </label>
      <label :class="type != 'competition' ? 'active' : ''" for="lang"> Languange </label>
    </div>
    <div class="invisible">
      <input type="radio" id="com" value="competition" v-model="type" />
      <input type="radio" id="lang" value="languange" v-model="type" />
    </div>
    <div class="my-16 flex justify-center w-full flex-wrap md:flex-nowrap px-5 gap-5">
      <CardItem
        v-for="(item, index) in output"
        :key="index"
        :nama="item.nama"
        :img="item.gambar"
        :deskripsi="item.deskripsi"
      />
    </div>
  </section>
</template>
