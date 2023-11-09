<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>


<template>
    <div class="nochat__container">
        <Icon icon="gridicons:chat" color="#1471d9" width="200" height="200" />
        <div>
            <h3>uChat</h3>
            <p>Click on a user to start chatting</p>
        </div>
    </div>
</template>


<style scoped lang="scss">
@import '~/assets/css/main.scss';
    .nochat__container {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 1rem;
        color: $text-color;
        text-align: center;
        
        h3 {
            font-weight: bold;
            font-size: 2rem;
        }
    }
</style>