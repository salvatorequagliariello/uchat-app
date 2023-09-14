<script setup lang="ts">
import { User } from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';

    const searchedUser = searchedUserName();
    const found = foundUser();

    const searchUser = () => {
        const res: DocumentData | void = getUsers(searchedUser.value);
        return res;
    };
</script>

<template>
    <div>
        <input type="text" placeholder="Search users" v-model="searchedUser"/>
        <button type="submit" @click="searchUser">Search</button>
        <p>{{ found?.name }}</p>
    </div>
</template>

<style>

</style>