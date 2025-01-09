<script setup>
// import { useRoute } from 'vue-router'
// const route = useRoute()
</script>

<template>
  <main class="about">
    <header
      :style="{
        backgroundImage: 'url(https://picsum.photos/600/400)'
      }"
    >
      工作室一角
    </header>
    <section>
      <h1>關於</h1>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
      </p>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.about{
  header{
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    height: 22rem;
    color: #999;
    padding: .5rem;
    font-size: 0.8rem;
    &:after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.5), transparent);
    }
  }
  section{
    background-color: transparent;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 1rem;
  }
}
</style>