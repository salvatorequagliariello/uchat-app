import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, Auth, onAuthStateChanged } from "firebase/auth";
import { uploadBytesResumable, getDownloadURL, StorageReference } from "firebase/storage";
import { ref as firebaseRef } from "firebase/storage";
import { Firestore, doc, setDoc } from "firebase/firestore";
import { NuxtApp } from "nuxt/app";
import { FirebaseStorage } from "firebase/storage";

export default function useAuth() {
  const nuxt: NuxtApp = useNuxtApp();
  const auth = <Auth>nuxt.$auth;
  const storage = <FirebaseStorage | StorageReference>nuxt.$storage;
  const db = <Firestore>nuxt.$firestore;
  const firebaseUser =  useFirebaseUser();
  
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

    
    const validateForm = useAuthValidator({ email, password }, "login");

    if (validateForm.flag === false ) {
      errorBag.value.authErrors = validateForm;
      return;
    };
    
    try {
      const userDetails = await signInWithEmailAndPassword(<Auth>auth, email, password);

      navigateTo("/");
      } catch (error) {
        console.log(error);
        errorBag.value.firebaseLoginErrors.isAnyError = true;
        errorBag.value.firebaseLoginErrors.error = error;
      };
  };
  
  const signUp = async ({ email, password, name, image }: UserFormObj) => {
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
    
    if (image === undefined) {
      errorBag.value.authErrors.image = "Error";
      return;
    } 

    const date = new Date().getTime();
    const storageRef = firebaseRef(<FirebaseStorage | StorageReference>storage, `${<string>name + date}`);

      try {
        const userDetails = await createUserWithEmailAndPassword(<Auth>auth, email, password);
        
        const upload = await uploadBytesResumable(storageRef, <Blob | File>image).then(() => {
          getDownloadURL(storageRef).then(async (downloadUrl) => {
            await updateProfile(userDetails.user, {
              displayName: name,
              photoURL: downloadUrl
            });
            
            await setDoc(doc(<Firestore>db, "users", userDetails.user.uid), {
              uid: userDetails.user.uid,
              name,
              email,
              photoUrl: downloadUrl
            });
            
            await setDoc(doc(<Firestore>db, "userChats", userDetails.user.uid), {
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

  const logout = async () => {
    await auth.signOut().then(() => {});
    return navigateTo("/sign-in");
  };

  const initUser = async (auth: Auth) =>  {
    await onAuthStateChanged(auth, user => {
      if (user) {
        firebaseUser.value = user;
        console.log(user.uid);
      }
    })
  }

  return { login, signUp, logout, errorBag, initUser };
};