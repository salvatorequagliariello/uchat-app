<script setup lang="ts">
import { User } from 'firebase/auth';
import { PropType } from 'nuxt/dist/app/compat/capi';

    const props = defineProps({
        user: {
            type: Object as PropType<User> | void,
        }
    });
    const { logout } = useAuth();
</script>


<template>
    <div class="user-details">
        <img :src="`${user?.photoURL}`" />
        <p>{{ user?.displayName }}</p>
        <button @click="logout">logout</button>
    </div>
</template>


<script scoped>

</script>