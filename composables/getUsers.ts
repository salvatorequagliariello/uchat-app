import { Firestore, collection, getDocs, query, where } from "firebase/firestore";
import { NuxtApp } from "nuxt/app";


export default async function getUsers (userName: string) {
    const nuxt: NuxtApp = useNuxtApp();
    const db = <Firestore>nuxt.$firestore;

    const usersQuery =  query(collection(db, "users"),
                where("name", "==", userName));
    
    try {
        const querySnapshot = await getDocs(usersQuery);
        querySnapshot.forEach(doc => {
            console.log(doc.data());
            foundUser().value  = doc.data();
        });
    } catch (error) {
        console.log(error);
    };
} ;