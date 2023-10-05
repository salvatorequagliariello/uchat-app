<script setup lang="ts">
       const userDetails = useFirebaseUser().value;

       if (!userDetails) {
        navigateTo("/loading");
       };
</script>

<template>
        <div class="homepage">
            <Chat />
        </div>
</template>

<style scoped lang="scss">
@import '~/assets/css/main.scss';
    .homepage {
        width: 100%;
        height: 100vh;

        background-color: $alt-secondary-color;
    }
</style>