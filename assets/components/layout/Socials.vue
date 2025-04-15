<script setup>
  const socials = [
    { 
      index: 'email',
      alt: 'EMAIL',
      link: 'mailto:cs@web4theme.com',
      target: '',
      rel: ''
    },
    {
      index:'ig',
      als:'IG',
      link: 'https://www.instagram.com/chiu_j_t/',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      index:'fb',
      als:'FB',
      link: 'https://www.facebook.com/profile.php?id=1143919654',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
  ]
</script>

<template>
  <div class="socials">
    <a 
      v-for="(item, index) in socials"
      :key="index"
      :href="item.link" 
      :target="item.target" 
      :rel="item.rel"
      :class="item.index"
    >
      {{ index }}
    </a> 
  </div>
</template>

<style lang="scss" scoped>
  .socials{
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    margin: 1rem auto;
    background-color: var(--white);
    a{
      display: inline-block;
      width: 2.25rem;
      height: 2.25rem;
      background-position: center;
      background-size: contain;
      opacity: 0.9;
      transition-property: opacity;
      transition-duration: 1.6s;
      color: transparent;
      &:hover{
        opacity: 1;
      }
      &.fb{
        background-image:url('@/assets/img/icons/fb_light.png');
        background-size: 90%;
      }
      &.email{
        background-image:url('@/assets/img/icons/mail_light.png');	
      }
      &.ig{
        background-image:url('@/assets/img/icons/ig_light.png');	
      }
    }
  }
</style>