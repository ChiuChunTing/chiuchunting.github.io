<script setup>
  import { ref } from 'vue'
  import Socials from '~/assets/components/layout/Socials.vue'
  const router = useRouter()
  const { locale, locales, setLocale } = useI18n()
  
  const menuOpen = ref(false)
  // const windowWidth = ref(0)
  const updatemenuOpen = () => {
    menuOpen.value = !menuOpen.value
    document.documentElement.style.overflow = menuOpen.value? 'hidden': ''
    document.body.style.overflow = menuOpen.value? 'hidden': ''
  }
  router.beforeResolve((_to, _from) => {
    if(menuOpen.value){
      updatemenuOpen()
    }
  })
</script>

<template>
  <div class="menu-group">
    <button 
      class="menu-btn"
      @click="updatemenuOpen"
    >
      <div class="hamburger" :class="{'is-active': menuOpen}" >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </div>
    </button>

    <template v-for="lang in locales" :key="lang.code">
      <button 
        v-if="lang.code !== locale"  
        @click="setLocale(lang.code)"
        class="i18n menu-group-i18n"
        :class="lang.code"
      >
        {{ lang.name }} 
      </button>
    </template>

  </div>

  <nav 
    class="menu-nav"
    :class="{open: menuOpen}"
  >
    <div class="menu-placeholder"></div>

    <div class="menu-nav-link">
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/works">Works</NuxtLink>
      <NuxtLink to="/exhibitions">Exhibitions</NuxtLink>
      <template v-for="lang in locales" :key="lang.code">
        <button 
          v-if="lang.code !== locale"  
          @click="setLocale(lang.code)"
          class="i18n menu-i18n"
          :class="lang.code"
        >
          {{ lang.name }} 
        </button>
      </template>
      <div class="menu-placeholder"></div>
    </div>

    <footer v-if="menuOpen" >
      <Socials/>
      <p>© 2025 Chiu Chun-Ting</p>
    </footer>
  </nav>
</template>

<style lang="scss" scoped>
.i18n{
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid var(--textGreyBlue);
  &.zh-TW{
    font-size: 0.6rem;
  }
}

.menu{
  &-group{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    /* 平板模式 */
    @media (max-width: 768px) {
      flex-direction: row-reverse;
    }
    &-i18n{
      padding: 0;
      display: none;
      /* 平板模式 */
      @media (max-width: 768px) {
        display: block;
      }
    }
  }

  &-btn{
    z-index: 9;
    display: none;
    /* 平板模式 */
    @media (max-width: 768px) {
      display: block;
    }
  }

  &-placeholder{
    display: none;
    /* 平板模式 */
    @media (max-width: 768px) {
      display: block;
    }
  }

  &-nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-color: transparent;
    transition: background-color .3s ease-in;
    &.open{
      background-color: #fff;
    }

    /* 平板模式 */
    @media (max-width: 768px) {
      flex-direction: column;
      color: var(--textGreyBlue);

      position: fixed;
      top: 0;
      left: 0;
      z-index: 8;

      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 2rem 3rem;
      display: none;
      &.open{
        display: flex;
      }
    }

    &-link{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.5rem;

      /* 平板模式 */
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        a{
          color: var(--textGreyBlue);
          font-size: 1.25rem;
        }
        .menu-i18n{
          display: none;
        }
      }

      div{
        width: 2px;
        height: 4rem;
        background: var(--textGreyBlue);
        margin-left: 2rem;
      }
    }
    footer{
      .socials{
        flex-direction: column;
        // justify-content: flex-end;
        align-items: end;
        gap: 0;
        margin: 0;
      }
    }
  }
}

.hamburger {
  position: relative;
  width: 1em;
  height: 1em;
  font-size: 1rem;
  transition: all 0.3s ease;

  &-line {
    position: absolute;
    right: 0;
    width: 100%;
    height: 0.125em;
    border-radius: 0.125em;
    background: currentColor;
    transition: inherit;

    &:nth-child(1) {
      top: 0.125em;

      .hamburger.is-active &,
      .w-nav-button.w--open & {
        top: 50%;
        transform: translateY(-50%) rotateZ(-135deg);
      }
    }

    &:nth-child(2) {
      top: 0.438em;

      .hamburger.is-active &,
      .w-nav-button.w--open & {
        right: 50%;
        width: 0;
      }
    }

    &:nth-child(3) {
      top: 0.75em;
      width: 0.625em;

      .hamburger.is-active &,
      .w-nav-button.w--open & {
        top: 50%;
        width: 100%;
        transform: translateY(-50%) rotateZ(135deg);
      }
    }
  }
}
</style>