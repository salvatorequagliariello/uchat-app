import { Auth } from "firebase/auth";
import { DocumentData, DocumentReference, Firestore, Query, doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { NuxtApp } from "nuxt/app";

export default async function addUser(newUser: DocumentData) {
    const nuxt: NuxtApp = useNuxtApp();
    const db = <Firestore>nuxt.$firestore;
    const auth = <Auth>nuxt.$auth;
    const currentUser = auth.currentUser;
    const currentUserId: string | undefined = currentUser?.uid;
    const newUserId: string  = newUser.uid;

    console.log(newUser);

    if (currentUserId) {
        const combinedId = currentUserId > newUserId ? currentUserId + newUserId : newUserId + currentUserId;

        try {
            const res = await getDoc(doc(db, "chats", combinedId));
    
            if (!res.exists()) {
                await setDoc(doc(db, "chats", combinedId), { messages: [] });

                await updateDoc(doc(db, "userChats", currentUserId), {
                    ciao: "cher",
                    [combinedId + ".userInfo"]: {
                        uid: newUserId,
                        displayName: newUser.name,
                        photoURL: newUser.photoUrl
                    },
                    [combinedId  +  ".date"]: serverTimestamp(),
                });

                await updateDoc(doc(db, "userChats", newUserId), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUserId,
                        displayName: currentUser?.displayName,
                        photoURL: currentUser?.photoURL
                    },
                    [combinedId  +  ".date"]: serverTimestamp(),
                }); 
            }
        } catch (error) {
            
        };
    };


};