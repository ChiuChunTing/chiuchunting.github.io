<template>
  <div class="spriteBox">
    <div class="sprite"></div>
  </div>
</template>

<style lang="scss" scoped>
.spriteBox{
  display: flex;
  align-items: center;
  height: 300px;
  transform: scale(.6);
  overflow: hidden;
}
.sprite {
  display:block;	
  background-repeat: no-repeat;
  background-position:0 0;
  background-color: transparent;
  width:543px; /* 6526/12 */
  height:380px;
  background-image:url('@/assets/img/fly.webp');	
  animation: fly 1.6s steps(12) infinite;
}
@keyframes fly {
  from {background-position:0 0;}
  to {background-position:-6526px 0;}
}
</style>