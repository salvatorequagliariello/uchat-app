<script setup lang="ts">
import { Icon } from '@iconify/vue';
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
            <div>
                <input 
                type="file" 
                accept="image/*" 
                @change="onFileChanged($event)"  
                id="inputFile"
                ref="myFileInput"
                :key="fileinputkey"
                />
                <label for="inputFile">
                    <Icon v-if="message.img" icon="mdi:image-check-outline" class="icon" />
                    <Icon v-else icon="uil:image-upload" class="icon"/>
                </label>
            </div>
            <button @click="handleSendMessage">
                <Icon icon="material-symbols:send" class="icon" />
            </button>
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

    input[type=text] {
        flex: 1.50;

        border: $alt-secondary-color-hover solid 2px;
        background-color: $alt-secondary-color;
        color: $text-color;

        padding: 0.5rem 1rem;
        border-radius: 1rem;

        &:focus {
            outline: none !important;
            border: $accent-color solid 2px;
        }
    }

    .chat-input__send {
        flex: 0.50;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        gap: 1rem;


        input[type=file] {
            display: none;
        }
    
        label {
            display: flex;
            align-items: center;
            background-color: $alt-secondary-color;
            border-radius: 100%;
            border-style: none;

            padding: 0.5rem;
            
            &:hover {
                background-color: $alt-secondary-color-hover;
                cursor: pointer;
            }
    
            .icon {
                width: 25px;
                height: 25px;
                color: $accent-color;
            }
        }

        button {
            background-color: $alt-secondary-color;
            border-radius: 100%;
            border-style: none;

            padding: 0.5rem;

            &:hover {
                background-color: $alt-secondary-color-hover;
                cursor: pointer;
            }

            .icon {
                width: 25px;
                height: 25px;
                color: $accent-color;
            }
        }
    }
</style>