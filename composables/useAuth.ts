import { setPersistence, signInWithEmailAndPassword, browserLocalPersistence, createUserWithEmailAndPassword } from "firebase/auth";

export const user = () => useState("userStore", () => ({}));

export default function useAuth(auth: any) {

  const errorBag = ref({
    authErrors: {
        email: null,
        password: null,
        name: null
    },
    firebaseLoginErrors: {
        isAnyError: false,
        error: "",
    },
    firebaseSignUpErrors: {
        isAnyError: false,
        error: "",
    }
  });

  const login = async ({ email, password }:  any) => {
    const validatedData = useAuthValidator({ email, password }, "login");

      try {
        const userDetails = await signInWithEmailAndPassword(auth, email, password);
        user().value = userDetails.user;
      } catch (error: any) {
        errorBag.value.firebaseLoginErrors.isAnyError = true;
        errorBag.value.firebaseLoginErrors.error = error;
      }
    };
  
  async function signUp({ email, password, name, image }:  any) {
    const validatedData = useAuthValidator({ email, password, name }, "signup");

    try {
      const userDetails = await createUserWithEmailAndPassword(auth, email, password);
      user().value = userDetails.user;
    } catch (error: any) {
      errorBag.value.firebaseSignUpErrors.isAnyError = true;
      errorBag.value.firebaseSignUpErrors.error = error;
    }
  };

  function logout() {
    auth.signOut().then(() => {})
  }


  return { login, signUp, logout, errorBag };
};