import { setPersistence, signInWithEmailAndPassword, browserLocalPersistence, createUserWithEmailAndPassword } from "firebase/auth";

export const user = () => useState<Object>("userStore", () => ({}));

export default function useAuth(auth: any) {

  const errorBag = ref({
    email: null,
    password: null,
    name: null
  });

  function login({ email, password }:  any) {
    const validatedData = useAuthValidator({ email, password }, "login");

    setPersistence(auth, browserLocalPersistence).then(() => {
      signInWithEmailAndPassword(auth, email, password).then((userDetails) => {
        user().value = userDetails.user;
        userDetails.user.getIdToken().then((token) => {

        });
      });
    });
  };
  
  function signUp({ email, password, name }:  any) {
    const validatedData = useAuthValidator({ email, password, name }, "signup");

    setPersistence(auth, browserLocalPersistence).then(() => {
      createUserWithEmailAndPassword(auth, email, password).then((userDetails) => {
        user().value = userDetails.user
        userDetails.user.getIdToken().then((token) => {

        });
      });
    });
  };

  function logout() {
    auth.signOut().then(() => {})
  }


  return { login, signUp, logout, errorBag };
};