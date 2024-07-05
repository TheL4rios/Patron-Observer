<script setup lang="ts">
import Container from './components/Container.vue';
import Subject from './lib/observer';
</script>

<template>
  <div class="main">
    <div class="header">
      <button @click="Subject.next({type: 'unsubscribe'})">Desuscribir</button>
      <button @click="Subject.next({type: 'sum', num: 2})">Sumar</button>
      <button @click="Subject.next({type: 'sub', num: 2})">Restar</button>
    </div>
    <Container/>
  </div>
</template>

<style lang="scss">
  .main {
    width: 100vw;
    height: 100vh;
  }

  .header {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  * {
    padding: 0;
    margin: 0;
  }
</style>
