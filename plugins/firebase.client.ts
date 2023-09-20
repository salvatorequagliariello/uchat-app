import { initializeApp } from 'firebase/app';
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import { FirebaseStorage, getStorage, ref } from "firebase/storage";
import { Firestore, getFirestore } from 'firebase/firestore';


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
    
    console.log(app);

    const   auth: Auth = getAuth(app);
    const storage: FirebaseStorage = getStorage(app);
    const firestore: Firestore = getFirestore(app);
    
    nuxtApp.vueApp.provide('auth', auth);
    nuxtApp.provide('auth', auth);
    
    nuxtApp.vueApp.provide('storage', storage);
    nuxtApp.provide('storage', storage);
    
    nuxtApp.vueApp.provide('firestore', firestore);
    nuxtApp.provide('firestore', firestore);
}); 
