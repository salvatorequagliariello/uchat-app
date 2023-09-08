import { setPersistence, signInWithEmailAndPassword, browserLocalPersistence, createUserWithEmailAndPassword } from "firebase/auth";

export default function useAuth(auth: any) {
  const user = useState("userStore", () => ({}));

  function login({ email, password }:  any) {
    setPersistence(auth, browserLocalPersistence).then(() => {
      signInWithEmailAndPassword(auth, email, password).then((userDetails) => {
        user.value = userDetails.user;
        userDetails.user.getIdToken().then((token) => {

        });
      });
    });
  };
  
  function signUp({ email, password, name }:  any) {
    setPersistence(auth, browserLocalPersistence).then(() => {
      createUserWithEmailAndPassword(auth, email, password).then((userDetails) => {
        user.value = userDetails.user
        userDetails.user.getIdToken().then((token) => {

        });
      });
    });
  };

  function logout() {
    auth.signOut().then(() => {})
  }


  return { user, login, signUp, logout };
};