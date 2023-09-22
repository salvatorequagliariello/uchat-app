<script setup>
import uchatLogo from "~/assets/images/uchat-logo.png";
</script>

<template>
    <div class="sign-in-page">
        <div class="form-container">
            <img :src="uchatLogo" />
            <LoginForm type="login" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '~/assets/css/main.scss';
    .sign-in-page {
        width: 100%;
        height: 100vh;
        background-color: $alt-secondary-color;
    }

    .form-container {
        width: 500px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        img {
            width: 100px;
            height: 100px;
            margin: 0 auto 1rem;
        }
    }
</style>