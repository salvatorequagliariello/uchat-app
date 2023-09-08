export default defineNuxtRouteMiddleware((to) => {
    const usertu = true;
    if (usertu) 
        return navigateTo("/sign-up");
});