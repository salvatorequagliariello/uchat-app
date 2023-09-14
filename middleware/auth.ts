import { Auth, CompleteFn, onAuthStateChanged } from "firebase/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const nuxt = useNuxtApp();
    const auth = <Auth>nuxt.$auth;

     await onAuthStateChanged(auth, user => {
        if (user && to.path == "/") {
            return navigateTo("/");
        } else if (!user && to.path == "/") {
            return navigateTo("/sign-in");
        } else if (user && from.path === "/sign-in" && to.path === "/") {
            return navigateTo("/");
        }
    });
});

