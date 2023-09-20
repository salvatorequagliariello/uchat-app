import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';


export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig().public;

    const firebaseConfig = {
        apiKey: config.FB_API_KEY,
        authDomain: config.FB_AUTH_DOMAIN,
        projectId: config.FB_PROJECT_ID,
        storageBucket: config.FB_STORAGE_BUCKET,
        messagingSenderId: config.FB_MESSAGING_SENDER_ID,
        appId: config.FB_APP_ID,
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const { login, signUp, logout, initUser, errorBag } = useAuth();

    initUser(auth);

    const storage = getStorage();
    const firestore = getFirestore();
    
    nuxtApp.vueApp.provide('app', app);
    nuxtApp.provide('app', app);

    nuxtApp.vueApp.provide('initUser', initUser);
    nuxtApp.provide('initUser', initUser);

    nuxtApp.vueApp.provide('auth', auth);
    nuxtApp.provide('auth', auth);
    
    nuxtApp.vueApp.provide('storage', storage);
    nuxtApp.provide('storage', storage);
    
    nuxtApp.vueApp.provide('firestore', firestore);
    nuxtApp.provide('firestore', firestore);
}); 
