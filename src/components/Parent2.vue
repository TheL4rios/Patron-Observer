<script setup lang="ts">
import Child from './Child.vue';
</script>

<template>
  <div class="parent2">
    <span>level 3</span>
    <Child/>
  </div>
</template>

<style scoped lang="scss">
.parent2 {
    width: 70vw;
    height: 60vh;
    background: rebeccapurple;
}
span {
  height: 30px;
  color: white;
  font-size: 30px;
}
</style>
