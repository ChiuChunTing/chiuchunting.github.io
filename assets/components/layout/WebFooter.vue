<script setup>
import Socials from '~/assets/components/layout/Socials.vue'

</script>

<template>
  <footer>
    <Socials />
    <div>© 2025 Chiu Chun-Ting</div>
  </footer>
</template>

<style lang="scss" scoped>
footer{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  color: var(--textGrey2);
  .socials{
    justify-content: center;
    align-items: center;
  }
}
</style>