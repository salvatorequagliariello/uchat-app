<script setup lang="ts">
import { Icon } from '@iconify/vue';

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
        <NuxtLink to="/">
            <button @click="closeChat" class="mobile-button">
                <Icon icon="material-symbols:close" class="icon"/>
            </button>
        </NuxtLink>
    </div>
</template>


<style scoped lang="scss">
@import '~/assets/css/main.scss';
    .chat-header {
        width: 100%;
        height: 70px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 1rem;
        background-color: $secondary-color;

        padding: 1rem;

        button {
            background-color: $secondary-color;
            border-radius: 100%;
            border-style: none;

            padding: 0.5rem;

            &:hover {
                background-color: $secondary-color-hover;
                cursor: pointer;
            }
            .icon {
                width: 20px;
                height: 20px;
                color: $text-color;
            }
        }
    }
    .chat-header__user {
        display: flex;
        gap: 1rem;
        align-items: center;
        color: $text-color;
        font-weight: 600;

        img {
            width: 50px;
            height: 50px;
            border-radius: 100%;
        }
    }
</style>