<template>
  <section
    class="bg-red-900 w-full text-white flex py-20 px-5 md:py-56 md:px-32 flex-col gap-10 md:flex-row"
  >
    <h2
      class="text-4xl font-league font-bold md:text-[4em] md:w-full"
      v-split-text="{
        delay: 100,
        duration: 0.6,
        ease: 'power3.out',
        splitType: 'chars',
      }"
    >
      About <u>me</u>
    </h2>
    <p class="md:text-xl md:w-full">
      Undergraduate student at Telkom University Purwokerto - Bachelor Software Engineering. Have a
      strong understanding about web development, web proramming, graphic design, and cloud
      computing. Have a nice English communication skill proven by TOEIC by ETS. Adaptive learner
      and open to working in a team and new experiences.
    </p>
  </section>
</template>
