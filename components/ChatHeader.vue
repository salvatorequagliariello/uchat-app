<script setup lang="ts">
    const chatInfo = <any>userConversation().value;

    const closeChat = () => {
        chatInfo.chatId = null;
        chatInfo.conversation = null;
        chatInfo.user = null;
        chatInfo.errors = null;
    };
</script>


<template>
    <div class="chat-header">
        <div class="chat-header__user">
            <img :src="chatInfo.user[`photoURL`]" />
            <p>{{ chatInfo.user.displayName }}</p>
        </div>
        <button @click="closeChat">X</button>
    </div>
</template>


<style scoped lang="scss">
    .chat-header {

    }
    .chat-header__user {
        
    }
</style>