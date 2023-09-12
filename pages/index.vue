<script setup>
    definePageMeta({
        middleware: 'auth',
    })

    const render = Object.keys(user().value).length > 0;
    
    const { logout } = useAuth();
</script>

<template>
    <div>
        <div v-if="render">
            homepage
            <button @click="logout">logout</button>
        </div>
    </div>
</template>

<style>

</style>