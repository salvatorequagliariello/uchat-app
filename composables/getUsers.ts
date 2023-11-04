import { Firestore, collection, getDocs, query, where } from "firebase/firestore";
import { NuxtApp } from "nuxt/app";

export default async function getUsers (userName: string) {
    const nuxt: NuxtApp = useNuxtApp();
    const db = <Firestore>nuxt.$firestore;
    const user = foundUser().value;

    const usersQuery =  query(collection(db, "users"),
                where("name", "==", userName));
                           
    try {
        const querySnapshot = await getDocs(usersQuery);

        if (querySnapshot.empty) {
            user.searchedFor = true;
            user.found = false;
        };

        querySnapshot.forEach(doc => {
            user.userDetails = doc.data();
            user.searchedFor = true;
            user.found = true;
        });

    } catch (error) {
        user.errors = true;
    };
};