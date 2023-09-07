import { browserLocalPersistence, createUserWithEmailAndPassword, getAuth, setPersistence, signInWithEmailAndPassword, signOut } from "firebase/auth";
import useFirebase from "~/plugins/firebase.client";

export default function useAuth() {
    const user =  useState('userStore', () => ({}));
    const { app } = useFirebase();
    const auth = getAuth(app);

    async function login ({ email, password }: any) {
        const persistance = await setPersistence(auth, browserLocalPersistence);
        const user = await signInWithEmailAndPassword(auth, email, password);
        const userToken = await user.user.getIdToken();

        console.log(userToken);
    };

    async function singUp({ email, password }: any ) {
        const persistance = await setPersistence(auth, browserLocalPersistence);
        const user = await createUserWithEmailAndPassword(auth, email, password);
        const userToken = await user.user.getIdToken();

        console.log(userToken);
    };

    async function logout() {
        const logout = await auth.signOut();
    }
}