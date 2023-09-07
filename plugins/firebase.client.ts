import { initializeApp } from 'firebase/app';

const config = useRuntimeConfig().public;


const firebaseConfig = {
    apiKey: config.FB_API_KEY,
    authDomain: config.FB_AUTH_DOMAIN,
    projectId: config.FB_PROJECT_ID,
    storageBucket: config.FB_STORAGE_BUCKET,
    messagingSenderId: config.FB_MESSAGING_SENDER_ID,
    appId: config.FB_APP_ID,
};

export default function useFirebase() {
    const app = initializeApp(firebaseConfig);
    return { app };
};
