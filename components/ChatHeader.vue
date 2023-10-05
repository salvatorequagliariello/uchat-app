<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { UserConversation } from '~/types/types';

    const chatInfo: UserConversation = userConversation().value;
    const closeChat = (): void => {
        chatInfo.chatId = null;
        chatInfo.conversation = null;
        chatInfo.user = null;
        chatInfo.errors = null;
    };
</script>


<template>
    <div class="chat-header">
        <div class="chat-header__user" v-if="chatInfo.user">
            <img :src="chatInfo.user[`photoURL`]" />
            <p>{{ chatInfo.user.displayName }}</p>
        </div>
        <button @click="closeChat">
            <Icon icon="material-symbols:close" class="icon"/>
        </button>
    </div>
</template>


<style scoped lang="scss">
@import '~/assets/css/main.scss';
    .chat-header {
        width: 100%;
        height: 80px;
        padding: 1rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-bottom-left-radius: 1rem;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;

        background-color: $secondary-color;

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
            border-radius: 100%;
        }
    }
</style>