<script setup>
    definePageMeta({
        middleware: 'auth',
    });

    const loggedIn = reactive({
        logged: false,
    });
    

    const enter = () => {
        loggedIn.logged = !loggedIn.logged;
        console.log(loggedIn);
    };
</script>

<template>
    <div>
        <div class="login-page" v-if="loggedIn.logged === false">
            <LoginForm type="signup" />
            <button @click="enter">entra</button>
        </div>
        <div v-else>
            Chat view
            <button @click="enter">esci</button>
        </div>
    </div>
</template>

<style>
    .login-page {
        background-color: white;
    }
</style>