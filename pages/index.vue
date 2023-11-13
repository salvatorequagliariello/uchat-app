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
            <div class="user-panel">
                <div class="user-panel__header" v-if="userDetails">
                    <UserHeader :user="userDetails" />
                    <UsersSearch />
                </div>
                <MobileChatsPreview />
            </div>
        </div>
    </div>
    <div class="desktop-homepage">
        <div class="app">
            <div class="user-panel">
                <div class="user-panel__header" v-if="userDetails">
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
        height: 100vh;

        display: flex;
        align-items: flex-start;
        justify-content: center;
    }

    .user-panel {
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        background-color: $secondary-color;
    }

    .user-panel__header {
        width: 100%;
        padding: 1rem 1.5rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        background-color: $accent-color;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    .chat-view {
        width: 70%;
        height: 100%;

        background-color: $primary-color;
        background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%2330455c' fill-opacity='0.16' fill-rule='evenodd'/%3E%3C/svg%3E");
        background-position: center;
    }

    @media (min-width: $breakpoint-tablet) {
        .desktop-homepage {
            display: block;
            width: 100%;
            height: 100%;
        }

        .mobile-homepage {
            display: none;
        }

        .user-panel {
            width: 37%;
        }

        .chat-view {
            width: 63%;
        }
    }

    @media (min-width: $breakpoint-tablet-xl) {
        .user-panel {
            width: 30%;
        }

        .chat-view {
            width: 70%;
        }
    }

    @media (min-width: $breakpoint-desktop-xxl) and (max-height: $breakpoint-desktop-xxl-height) {
        .app {
            width: 1920px;
            height: 100vh;

            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%);
        }
    }

    @media (min-width: $breakpoint-desktop-xxl) and (min-height: $breakpoint-desktop-xxl-height){
        .app {
            width: 1920px;
            height: 1080px;

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .user-panel {
            border-bottom-left-radius: 1rem;
            border-top-left-radius: 1rem;
        }
        
        .user-panel__header {
            border-top-left-radius: 1rem;
        }

        .chat-view {
            border-top-right-radius: 1rem;            
            border-bottom-right-radius: 1rem;            
        }
    }
</style>