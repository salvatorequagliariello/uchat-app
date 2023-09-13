<script setup>

</script>

<template>
    <div class="page">
        sign-in
        <LoginForm type="login" />
        <NuxtLink to="/sign-up">No account? sign up</NuxtLink>
    </div>
</template>

<style>
.page {
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}
</style>