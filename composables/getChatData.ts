import { DocumentData, Firestore, doc, onSnapshot } from "firebase/firestore";
import { NuxtApp } from "nuxt/app";

export default function getChatData() {
    const nuxt: NuxtApp = useNuxtApp();
    const db = <Firestore>nuxt.$firestore;
    const selectedChat = userConversation();

    const unsub = onSnapshot(doc(db, "chats", selectedChat.value.chatId), doc => {
        if (doc.exists()) {
            selectedChat.value.conversation = doc.data().messages;
        };
    });
};