<script setup lang="ts">

</script>

<template>
  <section class="introductionContainer">
    <div class="context mt-5 mb-5">
      <p>{{ $t('intro.content1') }}</p>
      <p>{{ $t('intro.content2') }}</p>
      <p>{{ $t('intro.content3') }}</p>
      <p>{{ $t('intro.content4') }}</p>
      <p>{{ $t('intro.content5') }}</p>
      <NuxtLink to="/about" class="border-link ml-auto mt-1">About me</NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.introductionContainer{
  background-color: var(--white);
  height: 100vh;
  padding: 1.5rem;
  /* 平板模式 */
  @media (max-width: 768px) {
    height: auto;
    padding: 3rem 1.5rem;
  }
  .context{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

</style>