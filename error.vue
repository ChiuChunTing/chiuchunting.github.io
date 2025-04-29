<script setup lang="ts">
import Sprite from '@/assets/components/layout/Sprite.vue'

const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})
const localePath = useLocalePath()
const isNotFound = props.error.statusCode === 404
const errorMsg = props.error.statusMessage || ''
</script>

<template>
  <main>
    <section>
      <h1>
        {{ isNotFound ? '404' : '500' }}
      </h1>
      <h2>
        {{ errorMsg ? errorMsg: isNotFound ? '找不到頁面' : '出現了一點問題' }}
      </h2>

      <Sprite />

      <NuxtLink :to="localePath('/')" class="border-link mb-1">Back to Home</NuxtLink>

      <p v-if="isNotFound">
        抱歉，我們找不到你要查看的作品或頁面。<br>
        Sorry, we couldn't find the page or artwork you were looking for.
      </p>
      <p v-else>
        系統遇到了一點問題，請稍後再試。<br>
        An unexpected error occurred. Please try again later.
      </p>
    </section>
  </main>
</template>

<style lang="scss" scoped>
section{
  flex-direction: column;
  height: 100vh;
  text-align: center;
}
h1 {
  font-size: 2rem;
}
</style>
