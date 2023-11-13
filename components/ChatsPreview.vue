<script setup lang="ts">
    import { DocumentData, Firestore, doc, onSnapshot } from "firebase/firestore";
    import { NuxtApp } from "nuxt/app";

    const nuxt: NuxtApp = useNuxtApp();
    const db = <Firestore>nuxt.$firestore;
  
    const currentUser = useFirebaseUser().value;
    const selectedChat = userConversation();
    const chats = ref();
    const selectedUserId = ref();
    const selected = "selected-chat";
    
    if (currentUser) {
        onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
            if (doc.exists()) {
                const res: DocumentData | undefined = doc.data();
                const sortedRes = Object.entries(res).sort((a: any, b: any) => b[1].date - a[1].date);
                chats.value = sortedRes;
            };
        });
    };
        
    const changeSelectedChat = (user: DocumentData) => {
        selectedChat.value.user = user;
        selectedUserId.value = user.uid;     
        
        if (currentUser) {
            selectedChat.value.chatId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
        };
        
        getChatData();
   };
        
</script>


<template>
    <div class="chats-preview">
        <h2>Chats</h2>
        <ul class="chats-list">
            <li 
                v-for="chat in chats" 
                :key="chat[1].userInfo.uid" 
                @click="changeSelectedChat(chat[1].userInfo)" 
                class="user-preview"
                :class="chat[1].userInfo.uid == selectedChat.user?.uid && selected"
            >
                <img :src="chat[1].userInfo.photoURL" />
                <div class="chat-preview__details">
                    <p class="user-name">{{ chat[1].userInfo.displayName }}</p>
                    <p>{{ chat[1].lastMessage["text"] }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>


<style scoped lang="scss">
@import '~/assets/css/main.scss';
    .chats-preview {
        width: 100%;
        padding: 1rem;

        overflow-y: auto;
        color: $text-color;
    }

    .chats-list {
        margin-top: 0.5rem;
        width: 100%;

        display: flex;
        flex-direction: column;

        gap: 1rem;
    }

    .user-preview {
        width: 100%;
        height: 70px;

        overflow-x: hidden;

        display: flex;
        align-items: center;

        background-color: $alt-secondary-color;
        color: $text-color;
        border-radius: 1.5rem;
        padding: 0.5rem 1rem;

        &:hover {
            background-color: $alt-secondary-color-hover;
            cursor: pointer;
        }

        img {
            width: 50px;
            border-radius: 100%;
            margin-right: 1rem;
        }
    }

    .chat-preview__details {
        max-width: 90%;
        max-height: 90%;

        overflow: hidden;

        .user-name {
            font-weight: 600;
        }
    }

    .selected-chat {
        background-color: $alt-secondary-color-hover;
    }
</style>