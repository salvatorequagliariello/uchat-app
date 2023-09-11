import { onAuthStateChanged } from "firebase/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const nuxt = useNuxtApp();
    const auth: any = nuxt.$auth;

    await onAuthStateChanged(auth, user => {
        if (user && to.path == "/") {
          return navigateTo("/");
        } else if (!user && to.path == "/") {
            return navigateTo("/sign-in");
        } else if (from.path == "/sign-in" && user && to.path == "/") {
            return navigateTo("/");
        }
    })
});
