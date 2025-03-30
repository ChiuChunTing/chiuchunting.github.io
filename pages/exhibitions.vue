<script setup>
import UnicornIndicator from '~/assets/components/layout/Unicorn.vue'

// import { useRoute } from 'vue-router'
// const route = useRoute()
</script>

<template>
  <main>
    <section>
      <!-- <NuxtImg src="/img/main/main.png" /> -->
      <UnicornIndicator/>
    </section>
    <section>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
      </p>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main{
  padding: 15vh 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;

  section{
    width: 100%;
    max-width: 768px;
    padding: 0 1rem;
    img{
      height: 380px;
    }
  }
}
</style>