<template>
  <section class="exhibitionsContainer mb-5">
    <NuxtLink to="/exhibitions" class="w-full context">
      <CldImage 
        src="exhibition_2025" 
        placeholder="blur"
        loading="lazy"
        width="762"
        height="953"
        alt="靈魂地景 Landscapes of the Soul_伊日後樂園 BACK-Y_2025-04-24-2025-05-17_邱君婷 Chiu Chun-Ting"
      />
    </NuxtLink>
    <div class="context mt-5">
      <h2 class="mb-1">{{ $t('exhibition.title') }}</h2>
      <p>{{ $t('exhibition.content1') }}</p>
      <p>{{ $t('exhibition.content2') }}</p>
      <NuxtLink to="/exhibitions" class="border-link ml-auto mt-1">+ Details</NuxtLink>
    </div>

  </section>
</template>

<style lang="scss" scoped>
.exhibitionsContainer{
  flex-direction: column;
  background-color: var(--white);
  gap: 1rem;
  padding: 0 1.5rem;
  img{
    width: 100%;
    max-width: 1024px;
    margin: auto;
  }
}
</style>