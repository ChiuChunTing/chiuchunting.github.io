<script setup>
  const localePath = useLocalePath()
</script>

<template>
  <section class="introductionContainer">
    <div class="context mt-5 mb-5">
      <p>{{ $t('intro.content1') }}</p>
      <p>{{ $t('intro.content2') }}</p>
      <p>{{ $t('intro.content3') }}</p>
      <p>{{ $t('intro.content4') }}</p>
      <p>{{ $t('intro.content5') }}</p>
      <NuxtLink :to="localePath('/about')" class="border-link ml-auto mt-1">+ More</NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.introductionContainer{
  background-color: var(--white);
  box-shadow: 0px -10px 15px rgba(200, 200, 200, 0.25);
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