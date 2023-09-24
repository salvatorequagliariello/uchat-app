<script setup lang="ts">
import { Auth } from 'firebase/auth';
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
        <div class="message" :class="[ isMessageSent ? `sent` : `received` ]">
            <p 
                class="message-text" 
                v-if="message.text"
                :class="[ isMessageSent ? `content-sent` : `content-received` ]"
            >
                {{ message.text }}
            </p>
            <img class="message-img" v-if="message.img" :src="message.img" />
        </div>
    </div>
</template>


<style scoped lang="scss">
@import '~/assets/css/main.scss';
    .message {
        width: 100%;
        display: flex;
    }
    
    .message-text {
        max-width: 50%;
        padding: 5px;
        height: min-content;
        margin: 5px;
        color: $text-color;
    }

    .message-img {

    }

    .content-sent {
        background-color: $accent-color;

        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .content-received {
        background-color: $alt-secondary-color-hover;

        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .sent {
        justify-content: end;
    }
    
    .received {
        justify-content: start;
    }
</style>