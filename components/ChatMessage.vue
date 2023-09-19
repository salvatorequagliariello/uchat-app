<script setup lang="ts">
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { NuxtApp } from 'nuxt/app';

    const props = defineProps({
        message: {
            type: Object as PropType<MessageObj>,
            required: true
        },
    });

    
    const nuxt: NuxtApp = useNuxtApp();
    const auth = <Auth>nuxt.$auth;
    const currentUser = auth.currentUser;
        
    const isMessageSent = ref(false);
        
    if (props.message.senderId === currentUser?.uid) isMessageSent.value = true;
        
    console.log(props.message, isMessageSent.value, currentUser?.uid);
</script>


<template>
    <div class="message" :class="[ isMessageSent ? `owner` : `received` ]">
        <div class="messageInfo">
            <p class="messageContent" v-if="message.text">{{ message.text }}</p>
            <img class="message" v-if="message.img" :src="message.img" />
        </div>
    </div>
</template>


<style scoped lang="scss">

    .message {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;

      .messageInfo {
        display: flex;
        flex-direction: column;
        color: gray;
        font-weight: 300;

        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .messageContent {
        max-width: 80%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        p {
          background-color: white;
          padding: 10px 20px;
          border-radius: 0px 10px 10px 10px;
          max-width: max-content;
        }

        img {
          width: 50%;
        }
      }

      &.owner {
        flex-direction: row-reverse;

        .messageContent {
          align-items: flex-end;
          p {
            background-color: #8da4f1;
            color: white;
            border-radius: 10px 0px 10px 10px;
          }
        }
      }
    }

</style>