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
@import '~/assets/css/main.scss';
    .messages {
        width: 100%;

        overflow-y: scroll;
        padding: 0.2rem;
    }

    @media (min-width: $breakpoint-tablet-xl) {
        .messages {
            padding: 1rem;
        }
    }
</style>


