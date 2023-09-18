<script setup lang="ts">
    const chatInfo = userConversation().value;

    const closeChat = () => {
        chatInfo.chatId = null;
        chatInfo.conversation = null;
        chatInfo.user = null;
        chatInfo.errors = null;
    }
</script>


<template>
    <div v-if="chatInfo.user" class="chat-view__container">
        <div class="chat-header">
            <div class="user-conversation">
                <img :src="chatInfo.user[`photoURL`]" />
                <p>{{ chatInfo.user.displayName }}</p>
            </div>
            <button @click="closeChat">X</button>
        </div>
        <div>
            <ChatInput />
        </div>
    </div>
    <div v-else>
        <p>add a chat</p>
    </div>
</template>


<style scoped>
    .chat-view__container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .chat-header {
        box-sizing: border-box;
        background-color: black;
        color: white;
        width: 100%;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
    }
    .user-conversation {
        display: flex;
        gap: 1rem;
    }

    .user-conversation img {
        width: 50px;
        border-radius: 100%;
    }
</style>