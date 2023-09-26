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

        padding: 1rem;
    }
</style>