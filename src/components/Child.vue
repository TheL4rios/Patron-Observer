<script setup lang="ts">
import {ref, onMounted} from 'vue';
import Subject, { ISubscription } from '../lib/observer';

const isSuscribed = ref(true);
const count = ref(0);
const subscription = ref<ISubscription>();

onMounted(() => {
    subscription.value = Subject.subscribe(data => {
        if (data.type === 'unsubscribe') {
            isSuscribed.value = false;
            subscription.value?.unsubscribe();
        } else if (data.type === 'sum') {
            count.value += data.num;
        } else if (data.type === 'sub') {
            count.value -= data.num;
        }
    });
});
</script>

<template>
  <div class="child">
    <span>Suscrito: {{ isSuscribed ? 'Sí' : 'No' }}</span>
    <span>Contador: {{ count }}</span>
  </div>
</template>

<style scoped lang="scss">
.child {
    width: 50vw;
    height: 50vh;
    background: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 20px;
    color: white;
}
</style>
