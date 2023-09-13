<script setup lang="ts">
import { Auth, User } from 'firebase/auth';

    definePageMeta({
        middleware: 'auth',
    })

    const nuxt = useNuxtApp();
    const auth = <Auth>nuxt.$auth;
    const { logout } = useAuth();
    const userDetails = auth.currentUser;

    const render = userDetails ? true : false;
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
                    <input type="text" placeholder="Search users" />
                    <button type="submit">Search</button>
                    <div class="chats">

                    </div>
                </div>

                <div class="chat-view">

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
        width: 900px;
        height: 600px;
        background-color: darkgrey;
        padding: 1rem;
        display: flex;
    }

    .app-container {
        display: flex;
        align-items: start;
        margin-top: 2rem;
    }

    .chats-container {
        display: flex;
        flex-direction: column;
        justify-content: left;
        flex: 1;

        background-color: rgb(55, 55, 55);
    }

    .chat-view {
        flex: 1;
        background-color: brown;
        width: 100%;
        height: 100%;
    }

    .user-details {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 1rem;
        margin: 1rem 0;
    }

    .user-details img {
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }
</style>