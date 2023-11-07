<script setup lang="ts">
       const userDetails = useFirebaseUser().value;

       if (!userDetails) {
        navigateTo("/loading");
       };
</script>

<template>
    <div class="mobile-homepage">
        <router-view></router-view>
        <div class="app">
            <div class="chats-container">
                <div class="chats-container__header" v-if="userDetails">
                    <UserHeader :user="userDetails" />
                    <UsersSearch />
                </div>
                <MobileChatsPreview />
            </div>
        </div>
    </div>
    <div class="desktop-homepage">
        <div class="app">
            <div class="chats-container">
                <div class="chats-container__header" v-if="userDetails">
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
    .desktop-homepage {
        display: none;
    }

    .mobile-homepage {
        display: block;
        width: 100%;
    }
    .app {
        width: 100%;
        max-height: 100%;

        display: flex;
        align-items: flex-start;
        justify-content: center;
    }

    .chats-container {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        height: 100%;
        width: 100%
    }

    .chats-container__header {
        width: 100%;
        padding: 1.5rem;

        flex-direction: column;
        gap: 1rem;
        background-color: $secondary-color;

        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    .chats-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        max-height: 100%;
        width: 30%;
    }

    .chat-view {
        display: flex;
        width: 70%;
        max-height: 100%;
    }

    @media (min-width: 900px) {
        .desktop-homepage {
            display: block;
            width: 100%;
            height: 100%;
        }

        .mobile-homepage {
            display: none;
        }
    }
</style>