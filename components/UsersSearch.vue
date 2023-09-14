<script setup lang="ts">
import { DocumentData } from 'firebase/firestore';

    const searchedUser = searchedUserName();
    const found = foundUser();

    const searchUser = () => {
        const res: DocumentData | void = getUsers(searchedUser.value);
        return res;
    };
</script>

<template>
    <div class="user-search-bar">
        <input type="text" placeholder="Search users" v-model="searchedUser"/>
        <button @click="searchUser">Search</button>
        <button @click="found = null">X</button>
        <div v-if="found" class="founduser-container">
            <img :src="`${found?.photoUrl}`" />
            <p>{{ found?.name }}</p>
            <button>add to chats</button>
        </div>
    </div>
</template>

<style>
.user-search-bar {
    width: 100%;
    background-color: rgb(29, 29, 29);
    padding: 1rem;
    display: flex;
    flex-direction: column;
}

.founduser-container {
    display: flex;
    height: 50px;
    width: 100%;
    margin: 1rem auto;
    justify-content: space-between;
    color: white;
}

.founduser-container img {
    width: 50px;
}
</style>