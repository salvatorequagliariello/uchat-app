<script setup lang="ts">
    const props = defineProps({
        conversation: {
            type: Array<MessageObj>
        }
    })

    const messages = ref();
    const message1 = ref();
    defineExpose({
        messages
    });
    
    onUpdated(() => {
        messages.value.scrollTo(0, messages.value.scrollHeight);
    });
</script>


<template>
    <div class="messages" ref="messages">
        <ChatMessage ref="message1" v-for="message in conversation" :message="message" :key="message.id" />
    </div>
</template>


<style scoped>
    .messages {
        overflow-y: scroll;
        padding: 1rem;
    }

</style>


