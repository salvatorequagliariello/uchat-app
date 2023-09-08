<script setup>
    let loggedIn = false;

    const enter = () => {
        loggedIn = !loggedIn;
        console.log(loggedIn);
    }
</script>

<template>
    <div>
        <div class="login-page" :v-if="!loggedIn">
            <LoginForm type="signup" />
            <button @click="enter">entra</button>
        </div>
        <div v-if="loggedIn">
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