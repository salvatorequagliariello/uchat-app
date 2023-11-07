<script setup lang="ts">
    const chatInfo: any = userConversation().value;
</script>


<template>
    <div class="chat-view__container">
        <div v-if="chatInfo.user" class="chat-view">
            <ChatHeader />
            <ChatMessages :conversation="chatInfo.conversation" />
            <ChatInput />
        </div>
        <div v-else class="nochat-view">
            <NoChatSelected />
        </div>
    </div>
</template>


<style scoped lang="scss">
    .chat-view__container {
        width: 100%;
        height: 100%;
        padding: 1rem;
    }
    
    .chat-view {
        height: 100%;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;        
    }

    .nochat-view {
        width: 100%;
        height: 100%;
    }
</style>