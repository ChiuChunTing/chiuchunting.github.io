import { defineNuxtPlugin } from 'nuxt/app'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { Observer } from 'gsap/Observer'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, Observer)
  return {
    provide: {
      gsap,
      ScrollTrigger,
      TextPlugin,
      Observer
    }
  }
})