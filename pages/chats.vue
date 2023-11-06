<script setup lang="ts">
    const chatInfo: any = userConversation().value;

    if (useBreakpoints().width.value >= 900) {
        navigateTo("/index");
    }
</script>


<template>
    <div v-if="chatInfo.user" class="chat-view__container">
        <ChatHeader />
        <ChatMessages :conversation="chatInfo.conversation" />
        <ChatInput />
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