<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<template>
  <main class="work">
    <section>
      <h1>Works</h1>
      <h2>系列作品</h2>
      <p>{{ route.params.id }}</p>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.work{
  section{
    background-color: rgb(93, 139, 134);
  }
}
</style>