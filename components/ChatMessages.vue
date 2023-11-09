<script setup lang="ts">
    const props = defineProps({
        conversation: {
            type: Array<MessageObj>
        }
    });

    const messages = ref();
    defineExpose({
        messages
    });
    
    onUpdated(() => {
        messages.value.scrollTo(0, messages.value.scrollHeight);
    });
</script>


<template>
    <div class="messages" ref="messages">
        <ChatMessage v-for="message in conversation" :message="message" :key="message.id" />
    </div>
</template>


<style scoped lang="scss">
    .messages {
        width: 100%;

        overflow-y: scroll;
        padding: 1rem;
    }
</style>


