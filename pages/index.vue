<script setup lang="ts">
       const userDetails = useFirebaseUser().value;

       if (!userDetails) {
        navigateTo("/loading");
       };
</script>

<template>
        <div class="homepage">
            <div class="app">
                <div class="chats-container" v-if="userDetails">
                    <div class="chats-container__header">
                        <UserHeader :user="userDetails" />
                        <UsersSearch />
                    </div>
                    <ChatsPreview />
                </div>
                <div class="chat-view">
                    <ChatView />
                </div>
            </div>
        </div>
</template>

<style scoped lang="scss">
@import '~/assets/css/main.scss';

    .homepage {
        width: 100%;
        height: 100vh;

        background-color: $alt-secondary-color;
    }
    .app {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,  -50%);

        width: 900px;
        height: 600px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: $primary-color;
        border-radius: 1rem;
    }

    .chats-container {
        flex: 0.70;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        height: 100%;
        width: 100%;
    }

    .chats-container__header {
        width: 100%;
        padding: 1.5rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: $secondary-color;

        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
    
    .chat-view {
        flex: 1.30;
        height: 100%;
        width: 100%;
    }
</style>