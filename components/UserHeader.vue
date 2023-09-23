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
    <div class="user-details">
        <img :src="`${user?.photoURL}`" />
        <p>{{ user?.displayName }}</p>
        <button @click="logout">
            <Icon icon="material-symbols:logout" class="icon"/>
        </button>
    </div>
</template>


<style scoped lang="scss">
@import '~/assets/css/main.scss';
    .user-details {
        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 80px;
        width: 100%;
        padding: 1rem 1rem;
        border-radius: 1rem;
        background-color: $accent-color;
        color: $text-color;

        img {
            height: 60px;
            width: 60px;

            border-radius: 100%;
        }

        button {
            background-color: $secondary-color;
            border-radius: 100%;
            border-style: none;

            padding: 0.5rem;

            .icon {
                width: 20px;
                height: 20px;
                color: $text-color;
            }
        }
    }
</style>