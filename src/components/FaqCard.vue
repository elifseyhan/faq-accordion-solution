<script setup>
import { ref } from 'vue'
import PlusIcon from '@/assets/icon-plus.svg';
import MinusIcon from '@/assets/icon-minus.svg'

defineProps(['faqs']);

const plusIcon = ref(PlusIcon);
const minusIcon = ref(MinusIcon);

</script>

<template>
  <div v-for="(faq, index) in faqs" :key="index">
    <div class="flex items-center justify-between py-6">
      <h3 class="font-bold text-lg text-dark-purple hover:text-primary transition-all ease-in hover:cursor-pointer">{{ faq.question }}</h3>
      <button @click="faq.isActive = !faq.isActive">
        <img v-if="!faq.isActive" :src="plusIcon" class="w-8 max-w-max" alt="">
        <img v-else :src="minusIcon" class="w-8" alt="">
      </button>
    </div>
    <div v-if="faq.isActive">
      <p class="pb-6 text-grayish-purple">{{ faq.answer }}</p>
    </div>
    <hr v-if="faqs.length - 1 !== index" class="text-light-pink" />
  </div>
</template>

<style scoped>
</style>
