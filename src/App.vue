<script setup>
import FaqCard from './components/FaqCard.vue';
import { ref } from "vue";

const faqs = ref([
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    isActive: true
  },
  {
    question: "Is Frontend Mentor free?",
    answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    isActive: false
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    isActive: false
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    isActive: false
  },
]);
</script>

<template>
  <main class="font-workSans min-h-screen">
    <div class="z-0">
      <img class="sm:hidden xs:block h-64 object-cover w-full" src="./assets/background-pattern-mobile.svg"
           alt="Mobile background pattern">
      <img class="sm:block hidden h-80 object-cover w-full" src="./assets/background-pattern-desktop.svg"
           alt="Desktop background pattern">
    </div>
    <div class="bg-white w-11/12 md:w-3/4 lg:w-2/5 mx-auto rounded-xl -mt-40 p-10 z-10 relative mb-8">
      <div class="flex gap-6 mb-8">
      <img class="h-12" src="./assets/icon-star.svg" alt="Star Icon"/>
      <h1 class="font-bold text-5xl">FAQs</h1>
    </div>
    <div class="">
      <FaqCard :faqs="faqs"/>
    </div>
    </div>
  </main>
</template>

<style scoped>
</style>
