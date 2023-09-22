<script setup>
</script>

<template>
    <div class="sign-in-page">
        <LoginForm type="login" />
        <NuxtLink to="/sign-up">No account? sign up</NuxtLink>
    </div>
</template>

<style scoped lang="scss">
@import url('./assets/css/main.scss');
.page {
    width: 100%;
    height: 100vh;
}
</style>