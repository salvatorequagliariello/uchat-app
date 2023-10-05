<script setup lang="ts">
import { User } from 'firebase/auth';
    const userDetails: User | void = useFirebaseUser().value;

    if (!userDetails) {
        navigateTo("/loading");
    };
</script>


<template>
    <div class="chat">
        <div class="chats-container" v-if="userDetails">
            <div class="chats-container__header">
                <UserHeader :user="userDetails" />
                <div class="search-container">
                    <UsersSearch />
                </div>
            </div>
            <ChatsPreview />
        </div>
        <div class="chat-view">
            <ChatView />
        </div>
    </div>
</template>


<style scoped lang="scss">
@import '~/assets/css/main.scss';
    .chat {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,  -50%);

        width: 80%;
        height: 90%;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: $primary-color;
        border-radius: 1rem;
    }

    .chats-container {
        flex: 0.7;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        height: 100%;
    }

    .chats-container__header {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: $secondary-color;

        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    .search-container {
        padding: 1rem;
    }
    
    .chat-view {
        flex: 1.3;

        height: 100%;
    }
</style>