import { signInWithEmailAndPassword, createUserWithEmailAndPassword, Auth } from "firebase/auth";
import { getStorage, uploadBytesResumable, getDownloadURL, } from "firebase/storage";
import { ref as storageRef } from "firebase/storage";

export const user = () => useState("userStore", () => ({}));

export default function useAuth() {
  const nuxt = useNuxtApp();
  const auth: any = nuxt.$auth;
  const storage: any = nuxt.$storage;
  
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
    },
    uploadError: {
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
      const firebaseRef = storageRef(storage, userDetails.user.uid);
      const uploadTask = uploadBytesResumable(firebaseRef, image);

      uploadTask.on('state_changed',
        (snapshot) => {
          return;
        },
        (error) => {
          errorBag.value.uploadError.isAnyError = true;
          return undefined;
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
            console.log("File available at", downloadUrl)
          })
        }
      );
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