import { getAuth, setPersistence, signInWithEmailAndPassword, 
    browserLocalPersistence,
    createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

export default function useAuth(auth: any) {
  const user = useState("userStore", () => ({}))
  const errorBag = ref({
    email: null,
    password: null,
    name: null,
  })


  function login({ email, password }:  any) {

    setPersistence(auth, browserLocalPersistence).then(() => {
      signInWithEmailAndPassword(auth, email, password).then((userDetails) => {
        user.value = userDetails.user
        userDetails.user.getIdToken().then((token) => {

        })
      })
    })
  }

  function logout() {
    auth.signOut().then(() => {})
  }

  function signUp({ email, password, name }:  any) {
    setPersistence(auth, browserLocalPersistence).then(() => {
      createUserWithEmailAndPassword(auth, email, password).then((userDetails) => {
        user.value = userDetails.user
        userDetails.user.getIdToken().then((token) => {

        })
      })
    })
  }

  return { user, login, signUp, logout, errorBag }
}