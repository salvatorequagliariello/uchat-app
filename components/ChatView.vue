<script setup lang="ts">
    const chatInfo = userConversation().value;

</script>


<template>
    <div>
        <p>{{ chatInfo.user.displayName }}</p>
    </div>
</template>


<style scoped>

</style>