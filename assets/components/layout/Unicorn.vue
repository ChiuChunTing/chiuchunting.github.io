<template>
  <div class="unicorn-sprite"></div>
</template>

<style lang="scss" scoped>
.unicorn-sprite{
  display:block;	
  margin:3em auto;
  width:556.5px; /* 9461/17 */
  height:380px;
  background-image:url('@/assets/img/unicorn.webp');	
  animation: walk 1.6s steps(17) infinite;
}
@keyframes walk {
  from {background-position:0 0;}
  to {background-position:-9461px 0;}
}
</style>