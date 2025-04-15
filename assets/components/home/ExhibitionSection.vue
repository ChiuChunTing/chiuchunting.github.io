<script setup lang="ts">

</script>

<template>
  <section class="exhibitionsContainer context mb-5">
    <NuxtLink to="/exhibitions">
      <NuxtImg 
        src="/img/exhibitionImg.JPG" 
        alt="展覽訊息"
      />
    </NuxtLink>

    <!-- <div class="context">
      <h6>靈魂地景 landscapes of the soul</h6>
      <p>{{ $t('exhibition.content1') }}</p>
      <p>{{ $t('exhibition.content2') }}</p>
      <p>{{ $t('exhibition.content3') }}</p>
      <p>{{ $t('exhibition.content4') }}</p>
      <b>{{ $t('exhibition.content5') }}</b>
    </div> -->

    <NuxtLink to="/exhibitions" class="border-link ml-auto mt-1">+ Details</NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
.exhibitionsContainer{
  flex-direction: column;
  background-color: var(--white);
  gap: 1rem;
  padding: 0 1.5rem;

  .context{
    margin: 2rem auto;
  }
  img{
    width: 100%;
    max-width: 1024px;
    margin: auto;
  }
}
</style>