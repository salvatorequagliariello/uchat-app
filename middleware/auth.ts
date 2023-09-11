
export default defineNuxtRouteMiddleware((to) => {
    const getUser = user();
    
    if (to.path === "/") {
        return navigateTo("/sign-in");
    }

})
