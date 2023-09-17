<script setup lang="ts">
import { NuxtApp } from 'nuxt/app';

    const nuxt: NuxtApp = useNuxtApp();
    const chatInfo = userConversation().value;
    const message: Ref<Message> = ref({ 
        text: null, 
        img: null
    });

    const handleSendMessage = async (): Promise<void> => {
        sendMessage(message.value);

        message.value.text = null;
        message.value.img = null;
    };
</script>


<template>
    <div class="chat-input__container">
        <input type="text" v-model="message.text" placeholder="Type something..." />
        <div class="chat-input__send">
            <input type="file" accept="image/*" :on-change="message.img"  id="chat-input-img-message" />
            <button @click="handleSendMessage">Send</button>
        </div>
    </div>
</template>


<style scoped>
    .chat-input__container {
        box-sizing: border-box;
        width: 100%;
        background-color: grey;
        padding: 1rem;

        display: flex;
        gap: 1rem;
    }

    input {
        flex: 1.50;
    }

    .chat-input__send {
        flex: 0.50;
        display: flex;
    }

</style>