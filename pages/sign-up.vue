<script>

</script>

<template>
    <div class="page">
        signup
        <LoginForm type="signup" />
        <NuxtLink to="/sign-in">Already have an account? Sign-in</NuxtLink>
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