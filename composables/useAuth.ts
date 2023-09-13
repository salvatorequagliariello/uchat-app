import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, Persistence, Auth } from "firebase/auth";
import { getStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ref as firebaseRef } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { NuxtApp } from "nuxt/app";
import { FirebaseStorage } from "firebase/storage";
import { FirebaseError } from "firebase/app";

export const user = () => useState("userStore", () => ({}));

export default function useAuth() {
  const nuxt: NuxtApp = useNuxtApp();
  const auth = nuxt.$auth;
  const storage = nuxt.$storage;
  const db = nuxt.$firestore;
  
  const errorBag: Ref<ErrorBagObj | null> = ref({
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


  const login = async ({ email, password }: UserFormObj) => {
    errorBag.value = {
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
    };

      try {
        const userDetails = await signInWithEmailAndPassword((auth: Auth), email, password);
        const validateForm = useAuthValidator({ email, password }, "login")

        if (validateForm.flag === false ) {
          errorBag.value.authErrors = validateForm;
          return;
        };

        user().value = userDetails.user;

        navigateTo("/");

      } catch (error) {
        console.log(error);
        errorBag.value.firebaseLoginErrors.isAnyError = true;
        errorBag.value.firebaseLoginErrors.error = error;
      } 
  };
  
  async function signUp({ email, password, name, image }: UserFormObj) {
    errorBag.value = {
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
    };

    const validateForm = useAuthValidator({ email, password, name, image }, "signup")

    if (validateForm.flag === false ) {
      errorBag.value.authErrors = validateForm;
      return;
    };
    
    if (typeof image !== "Blob") {
      errorBag.value.authErrors.image = "Error";
      return;
    } 

    const date = new Date().getTime();
    const storageRef = firebaseRef(storage<FirebaseStorage | StorageReference>, `${name + date}`);

    try {
      const userDetails = await createUserWithEmailAndPassword(auth, email, password);
      user().value = userDetails.user;

      const upload = await uploadBytesResumable(storageRef, image).then(() => {
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

            await setDoc(doc(db, "userChats", userDetails.user.uid), {
            });

          });

          navigateTo("/sign-in");
        }
      );

    } catch (error) {
      errorBag.value.firebaseSignUpErrors.isAnyError = true;
      errorBag.value.firebaseSignUpErrors.error = error;
    }
  };

  function logout() {
    auth.signOut().then(() => {})
  }


  return { login, signUp, logout, errorBag };
};