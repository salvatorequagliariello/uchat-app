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
                    <UserHeader :user="userDetails" />
                    <UsersSearch />
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

        max-width: 700px;
        max-height: 600px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: $primary-color;
    }

    .chats-container {
        flex: 0.75;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        height: 100%;
    }

    .chat-view {
        flex: 1.25;
        height: 100%;
    }
</style>