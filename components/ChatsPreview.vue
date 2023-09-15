<script setup lang="ts">
    import { Auth } from "firebase/auth";
    import { DocumentData, DocumentSnapshot, Firestore, doc, onSnapshot } from "firebase/firestore";
    import { NuxtApp } from "nuxt/app";

    const nuxt: NuxtApp = useNuxtApp();
    const db = <Firestore>nuxt.$firestore;
    const auth = <Auth>nuxt.$auth;
    const currentUser = auth.currentUser;
    let chats = ref();
    
    if (currentUser) {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                if (doc.exists()) {
                    const res: DocumentData | undefined = doc.data();
                    chats.value = Object.entries(res);
                };
        });
    };
</script>


<template>
        <div class="chat-previews">
            <ul>
                <li v-for="chat in chats" :key="chat[1].uid">
                    <div class="chat-preview__container">
                        <img :src="chat[1].userInfo[`photoURL`]" />
                        <div class="chat-preview__details">
                            <p>{{ chat[1].userInfo["displayName"] }}</p>
                            <p>{{ chat[1].userInfo["lastMessage"] }}</p>
                        </div>
                    </div>
                </li>
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
        padding: 0.5rem 1rem;
    }
    
    li {
        border-radius: 20px;
        margin-bottom: 1rem;
        background-color: white;
    }

    li:hover {
        background-color: grey;
        cursor: pointer;
    }

    li img {
        width: 50px;
        border-radius: 100%;
        margin-right: 1rem;
    }
    
</style>