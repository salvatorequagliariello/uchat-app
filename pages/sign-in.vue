<script setup>
import uchatLogo from "~/assets/images/uchat-logo.png";
</script>

<template>
    <div class="sign-in-page">
        <div class="form-container">
            <div class="form-header">
                <img :src="uchatLogo" alt="uChat app logo."/>
                <p>uChat</p>
            </div>
            <LoginForm type="login" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '~/assets/css/main.scss';
    .sign-in-page {
        width: 100%;
        background-color: $alt-secondary-color;
    }

    .form-container {
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 2rem;
    }
    
    .form-header {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto 2rem;
        gap: 0.875rem;
                
        img {
            width: 70px;
            height: 70px;
            margin: 0 0 1rem;
        }

        p {
            color: $accent-color;
            font-size: 2rem;
        }
    }

    @media (min-width: $breakpoint-tablet) {
        .form-container {
            width: 500px;

            padding: 2rem;
            border-radius: 1rem;

            background-color: $alt-secondary-color;
        }
    }
</style>