<script setup lang="ts">
import { User } from 'firebase/auth';
import { PropType } from 'nuxt/dist/app/compat/capi';
import { Icon } from '@iconify/vue';

    const props = defineProps({
        user: {
            type: Object as PropType<User>,
        }
    });
    const { logout } = useAuth();
</script>


<template>
    <div class="user-header">
        <div class="user-details">
            <img :src="`${user?.photoURL}`" />
            <p>{{ user?.displayName }}</p>
        </div>
        <button @click="logout">
            <Icon icon="material-symbols:logout" class="icon"/>
        </button>
    </div>
</template>


<style scoped lang="scss">
@import '~/assets/css/main.scss';
    .user-header {
        height: 80px;
        padding: 1rem;
        width: 100%;
        
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-bottom-left-radius: 1rem;
        border-top-left-radius: 1rem;
        background-color: $accent-color;
        color: $text-color;

        img {
            height: 55px;
            width: 55px;

            border-radius: 100%;
        }

        button {
            background-color: $secondary-color;
            border-radius: 100%;
            border-style: none;

            padding: 0.5rem;

            &:hover {
                background-color: $secondary-color-hover;
                cursor: pointer;
            }

            .icon {
                width: 20px;
                height: 20px;
                color: $text-color;
            }
        }
    }

    .user-details {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
    }
</style>