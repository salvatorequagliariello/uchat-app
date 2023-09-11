import { onAuthStateChanged } from "firebase/auth";

export default defineNuxtRouteMiddleware((to) => {
    const nuxt = useNuxtApp();
    const auth: any = nuxt.$auth;
    onAuthStateChanged(auth, user => {
        if (user && to.path == "/") {
            console.log(user);
            return navigateTo("/");
        } else if (!user && to.path == "/") {
            console.log(user);
          return navigateTo("/sign-in");
        }
    })
});
