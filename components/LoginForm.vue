<script setup>
    const nuxt = useNuxtApp();
    const firebaseApp = nuxt.$auth;
    const {login, signUp, errorBag} = useAuth(firebaseApp);

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

    function processLogin() {
        if (formProps.type == "login") {
            login(userForm);
        } else {
            signUp(userForm);
        };
    };
</script>

<template>
    <form class="sign-in-form" @submit.prevent="handleSubmit">
        <div class="form-field">
            <input type="text" placeholder="Name" v-model="userForm.name" v-if="type == 'signup'" />
            <p v-if="errorBag.name">{{ errorBag.name }}</p>
        </div>
        <div class="form-field">
            <input type="email" placeholder="Email" v-model="userForm.email"/>
            <p v-if="errorBag.email">{{ errorBag.email }}</p>
        </div>
        <div class="form-field">
            <input type="password" placeholder="Password" v-model="userForm.password"/>
            <p v-if="errorBag.password">{{ errorBag.password }}</p>
        </div>
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

    .form-field {
        display: flex;
        flex-direction: column;
    }

</style>