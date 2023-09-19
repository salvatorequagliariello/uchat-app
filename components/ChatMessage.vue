<script setup lang="ts">
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { NuxtApp } from 'nuxt/app';

    const props = defineProps({
        message: {
            type: Object as PropType<MessageObj>,
            required: true
        },
    });

    const nuxt: NuxtApp = useNuxtApp();
    const auth = <Auth>nuxt.$auth;
    const currentUser = auth.currentUser;
    
    const isMessageSent = ref(false);

    if (props.message.senderId === currentUser?.uid) isMessageSent.value = true;
</script>


<template>
    <div>
        <div class="message-container" :class="[ isMessageSent ? `sent` : `received` ]">
            <p class="message" v-if="message.text">{{ message.text }}</p>
            <img class="message" v-if="message.img" :src="message.img" />
        </div>
    </div>
</template>


<style scoped>

    .message-container {
        width: 100%;
        display: flex;
    }
    
    .message {
        padding: 5px;
        background-color: aquamarine;
        border-radius: 5px;
        width: min-content;
        height: min-content;
        text-align: end;
        margin: 5px;
    }
    .sent {
        justify-content: end;
    }
    
    .received {
        justify-content: start;
    }
</style>