<script setup lang="ts">
    const chatInfo = <any>userConversation().value;
</script>


<template>
    <div v-if="chatInfo.user" class="chat-view__container">
        <ChatHeader />
        <ChatMessages :conversation="chatInfo.conversation" />
        <ChatInput />
    </div>
    <div v-else>
        <p>add a chat</p>
    </div>
</template>


<style scoped lang="scss">
    .chat-view__container {
        width: 100%;
        height: 100%;
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

    .ul {
        max-height: 100%;
    }

    .user-conversation img {
        width: 50px;
        border-radius: 100%;
    }

    .message-container {
        overflow-y: scroll;
    }
</style>