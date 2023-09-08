<script setup>
    const nuxt = useNuxtApp();
    const firebaseApp = nuxt.$auth;
    console.log(firebaseApp);

    const {login, signUp} = useAuth(firebaseApp);

    const formProps = defineProps({
        type: {
            type: String,
        }
    });

    const userForm = reactive({
        name: "",
        email: "",
        password: "",
    });

    function process() {
        signUp(userForm)
    };
</script>

<template>
    <form class="sign-in-form" @submit.prevent="process">
        <input type="text" placeholder="Name"  v-model="userForm.name"/>
        <input type="email" placeholder="Email" v-model="userForm.email"/>
        <input type="password" placeholder="Password" v-model="userForm.password"/>
        <button type="submit">{{ type == "login" ? "Login" : "Register" }}</button>
    </form>
</template>

<style lang="scss" scoped>
    .sign-in-form {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        margin: 0 auto;
        gap: 2rem;
    };

</style>