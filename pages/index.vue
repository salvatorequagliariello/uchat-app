<script setup lang="ts">
import { Auth, User } from 'firebase/auth';

    definePageMeta({
        middleware: 'auth',
    })

    const nuxt = useNuxtApp();
    const auth = <Auth>nuxt.$auth;
    const userDetails = auth.currentUser;
    const { logout } = useAuth();

    const render: boolean = userDetails ? true : false;


</script>

<template>
    <div class="homepage">
        <div class="app-view">
            homepage
            <div class="app-container">

                <div class="chats-container">
                    <div class="user-details">
                        <img :src="`${userDetails?.photoURL}`" />
                        <p>{{ userDetails?.displayName }}</p>
                        <button @click="logout">logout</button>
                    </div>
                    <UsersSearch />
                    <ChatsPreview />
                </div>

                <div class="chat-view">
                    <ChatView />
                </div>

            </div>
        </div>
    </div>
</template>

<style>
    .app-view {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,  -50%);
        width: 1000px;
        height: 700px;
        background-color: darkgrey;
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }

    .app-container {
        display: flex;
        margin-top: 2rem;
        height: 100%;
    }

    .chats-container {
        flex: 0.75;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 1rem;
        width: 100%;

        background-color: rgb(55, 55, 55);
    }

    .chat-view {
        padding: 1rem;
        flex: 1.25;
        background-color: brown;
        display: flex;
    }

    .user-details {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: black;
        width: 100%;
        color: white;
        padding: 1rem;
    }

    .user-details img {
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }
</style>