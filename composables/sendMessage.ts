import { Auth } from "firebase/auth";
import { Firestore, Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { FirebaseStorage, StorageReference, uploadBytesResumable, ref as firebaseRef, getDownloadURL } from "firebase/storage";
import { NuxtApp } from "nuxt/app";
import { uuid } from "vue-uuid";


export default async function sendMessage(message: Message) {
    const nuxt: NuxtApp= useNuxtApp();
    const db = <Firestore>nuxt.$firestore;
    const storage = <FirebaseStorage | StorageReference>nuxt.$storage;
    const auth = <Auth>nuxt.$auth;
    const userDetails = auth.currentUser;
    const chatInfo = userConversation().value;

    if (message.img) {
        const storageRef = firebaseRef(<FirebaseStorage | StorageReference>storage, uuid.v4());
        const upload = await uploadBytesResumable(storageRef,  <Blob | File>message.img).then(() => {
            getDownloadURL(storageRef).then(async (downloadURL) => {
                if (chatInfo.chatId) {
                    await updateDoc(doc(db, "chats", chatInfo.chatId), {
                        messages: arrayUnion({
                            id: uuid.v4(),
                            text: message.text,
                            senderId: userDetails?.uid,
                            date: Timestamp.now(),
                            img: downloadURL,
                        }),
                    });
                } else {
                    chatInfo.errors = true;
                }
            });
        })
    } else {
        if (chatInfo.chatId) {

            await updateDoc(doc(db, "chats", chatInfo.chatId), {
                messages: arrayUnion({
                    id: uuid.v4(),
                    text: message.text,
                    senderId: chatInfo.user?.uid,
                    data: Timestamp.now()
                })
            });
        } else {
            chatInfo.errors = true;
        }
    };

    if (userDetails) {
        await updateDoc(doc(db, "userChats", userDetails.uid), {
            [chatInfo.chatId + ".lastMessage"]: {
                text: message.text,
            },
            [chatInfo.chatId + ".date"]: serverTimestamp(),
        });
    };
  
      await updateDoc(doc(db, "userChats", chatInfo.user?.uid), {
        [chatInfo.chatId + ".lastMessage"]: {
          text: message.text,
        },
        [chatInfo.chatId + ".date"]: serverTimestamp(),
      });
};