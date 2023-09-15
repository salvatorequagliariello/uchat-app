import { Auth } from "firebase/auth";
import { Firestore, doc, onSnapshot } from "firebase/firestore";
import { NuxtApp } from "nuxt/app";
import { userChats } from "./states";

export default function getUserChats() {
    const nuxt: NuxtApp = useNuxtApp();
    const db = <Firestore>nuxt.$firestore;
    const auth = <Auth>nuxt.$auth;
    const currentUser = auth.currentUser;
    const foundChats = userChats();

    if (currentUser) {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                return doc.data();
            })
    };

};