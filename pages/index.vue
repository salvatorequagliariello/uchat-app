<script setup>
    definePageMeta({
        middleware: 'auth',
    });

    const { logout } = useAuth();

</script>

<template>
    <div>
        <div>
            homepage
            <button @click="logout">logout</button>
        </div>
    </div>
</template>

<style>

</style>