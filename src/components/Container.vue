<script setup lang="ts">
import Parent from './Parent.vue';
</script>

<template>
  <div class="container">
    <span>level 1</span>
    <Parent/>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 90%;
  background: green;
}

span {
  height: 30px;
  color: white;
  font-size: 30px;
}
</style>
