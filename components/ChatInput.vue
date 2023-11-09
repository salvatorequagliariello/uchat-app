<script setup lang="ts">
import { Icon } from '@iconify/vue';

    const message: Ref<Message> = ref({ 
        text: null, 
        img: null
    });
    const fileinputkey = ref(0);


    const onFileChanged = function ($event: Event): void {
        const target =  <HTMLInputElement>$event.target;
        if (target && target.files) {
            message.value.img = target.files[0];
        };
    };
    
    const handleSendMessage = async (): Promise<void> => {
        sendMessage(message.value);
        
        message.value.text = null;
        message.value.img = null;
        fileinputkey.value++;
    };
</script>


<template>
    <div class="chat-input__container">
        <input 
            type="text" 
            v-model="message.text" 
            placeholder="Type something..." 
        />
        <div class="chat-input__send">
            <input 
                type="file" 
                accept="image/*" 
                @change="onFileChanged($event)"  
                id="inputFile"
                ref="myFileInput"
                :key="fileinputkey"
            />
            <button @click="handleSendMessage">Send</button>
        </div>
    </div>
</template>


<style scoped lang="scss">
@import '~/assets/css/main.scss';
    .chat-input__container {
        width: 100%;
        display: flex;

        box-sizing: border-box;
        border-radius: 1rem;
        padding: 1rem;
        
        background-color: $alt-secondary-color;
    }

</style>