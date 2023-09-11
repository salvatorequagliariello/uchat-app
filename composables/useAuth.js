import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ref as firebaseRef } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

export const user = () => useState("userStore", () => ({}));

export default function useAuth() {
  const nuxt = useNuxtApp();

  const auth = nuxt.$auth;
  const storage = nuxt.$storage;
  const db = nuxt.$firestore;
  
  const errorBag = ref({
    authErrors: {
        email: null,
        password: null,
        name: null,
        image: null
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

  const login = async ({ email, password }) => {

      try {
        const userDetails = await signInWithEmailAndPassword(auth, email, password);
        user().value = userDetails.user;
      } catch (error) {
        console.log(error);
      }
  };
  
  async function signUp({ email, password, name, image }) {
    const validateForm = useAuthValidator({ email, password, name, image }, "signup")

    if (validateForm.flag === false) {
      errorBag.value.authErrors = validateForm;
      return;
    };

    const date = new Date().getTime();
    const storageRef = firebaseRef(storage, `${name + date}`);

    try {
      const userDetails = await createUserWithEmailAndPassword(auth, email, password);
      user().value = userDetails.user;

      await uploadBytesResumable(storageRef, image).then(() => {
          getDownloadURL(storageRef).then(async (downloadUrl) => {
            await updateProfile(userDetails.user, {
              name,
              photoURL: downloadUrl
            });

            await setDoc(doc(db, "users", userDetails.user.uid), {
              uid: userDetails.user.uid,
              name,
              email,
              photoUrl: downloadUrl
            });
          });
        }
      );


    } catch (error) {
      console.log(error);
    }
  };

  function logout() {
    auth.signOut().then(() => {})
  }


  return { login, signUp, logout, errorBag };
};