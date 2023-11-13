<script setup>
import uchatLogo from "~/assets/images/uchat-logo.png";
</script>

<template>
    <div class="loading-page">
        <img :src="uchatLogo" alt="uChat app logo."/>
        <div class="loader">
            <div class="loader__ball"></div>
            <div class="loader__ball"></div>
            <div class="loader__ball"></div>
        </div>
        <h2>Loading...</h2>
    </div>
</template>


<style scoped lang="scss">
@import '~/assets/css/main.scss';
    $dotColor: $accent-color;
    $dotSize: 1rem;
    $duration: 2.5s;

    .loading-page {
        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        color: $text-color;

        img {
            width: 100px;
            height: 100px;
        }

        h2 {
            font-weight: 300;
            font-size: 1.5rem;
        }
    }

    @media (min-width: $breakpoint-tablet) {
        .loading-page {
            img {
                width: 150px;
                height: 150px;
            }
    
            h2 {
                font-size: 1.5rem;
            }
        }
    }
    .loader {
        animation: rotate $duration linear infinite normal;
        position: relative;
        transform-origin: 50% 50%;
        margin: 3rem 0;
    
        &__ball {
            height: $dotSize;
            left: -$dotSize / 2;
            position: absolute;
            top: -$dotSize / 2;
            transform-origin: 50% 50%;
            width: $dotSize;
    
            &:nth-of-type(2) {
                transform: rotate(120deg);
            }
    
            &:nth-of-type(3) {
                transform: rotate(240deg);
            }
    
            &::after {
                animation: moveAndScale $duration / 2 ease-in-out infinite alternate;
                background-color: $dotColor;
                border-radius: 50%;
                content: "";
                display: inline-block;
                height: 100%;
                width: 100%;
                transform-origin: 50% 50%;
            }
        }
    }
    
    @keyframes rotate {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
    @keyframes moveAndScale {
        0%, 15% {
            transform: translateY(0) scale(0.65);
        }
        100% {
            transform: translateY(-150%) scale(1);
        }
    }
</style>