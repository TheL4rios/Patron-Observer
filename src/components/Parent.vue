<script setup lang="ts">
    import Parent2 from './Parent2.vue';
</script>

<template>
  <div class="parent">
    <span>level 2</span>
    <Parent2/>
  </div>
</template>

<style scoped lang="scss">
.parent {
    width: 90vw;
    height: 80vh;
    background: burlywood;
}
span {
  height: 30px;
  color: white;
  font-size: 30px;
}
</style>
