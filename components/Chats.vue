<script setup lang="ts">
    import { DocumentData } from 'firebase/firestore';
    import { Auth } from "firebase/auth";
    import { Firestore, doc, onSnapshot } from "firebase/firestore";
    import { NuxtApp } from "nuxt/app";

    const nuxt: NuxtApp = useNuxtApp();
    const db = <Firestore>nuxt.$firestore;
    const auth = <Auth>nuxt.$auth;
    const currentUser = auth.currentUser;
    const foundChats = userChats();

    if (currentUser) {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                foundChats.value = doc.data();
                console.log(Object.entries(foundChats.value));
            })
    };

</script>


<template>
        <div class="chat-previews">
            <ul>
                <p>{{ foundChats }}</p>
                <!-- <li v-for="chat in chats" :key="chat[1].uid">
                    <div class="chat-preview__container">
                        <p>{{ chat }}</p>
                        <img :src="chat[1].userInfo[`photoURL`]" />
                        <div class="chat-preview__details">
                            <p>{{ chat[1].userInfo["displayName"] }}</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                        </div>
                    </div>
                </li> -->
            </ul>
        </div>
</template>


<style scoped>

    .chat-previews {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 1rem;
    }
    
    .chat-preview__container {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        align-items: center;
        background-color: white;
        border-radius: 20px;
        padding: 0.5rem 1rem;
    }

    ul {
        color: white;
    }

</style>