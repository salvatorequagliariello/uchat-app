<script setup lang="ts">
import { Message } from '~/types/types';

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


<style scoped>
    .chat-input__container {
        box-sizing: border-box;
        width: 100%;
        background-color: grey;
        padding: 1rem;

        display: flex;
        gap: 1rem;
    }

    input {
        flex: 1.50;
    }

    .chat-input__send {
        flex: 0.50;
        display: flex;
    }

</style>