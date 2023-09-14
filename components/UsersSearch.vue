<script setup lang="ts">
import { DocumentData } from 'firebase/firestore';

    const searchedUser = searchedUserName();
    const queryResponse = foundUser().value;

    const eraseSearch = () => {
        queryResponse.userDetails = {};
        queryResponse.errors = false;
        queryResponse.searchedFor = false;
        queryResponse.found = false;
        searchedUser.value = "";
    };

</script>

<template>
    <div class="user-search-bar">

        <input type="text" placeholder="Search users" v-model="searchedUser"/>
        <button @click="getUsers(searchedUser)">
            Search
        </button>
        <button @click="eraseSearch">
            X
        </button>

        <div v-if="queryResponse.found && queryResponse.searchedFor" class="founduser-container">
            <img :src="`${queryResponse?.userDetails.photoUrl}`" />
            <p>{{ queryResponse?.userDetails.name }}</p>
            <button>add to chats</button>
        </div>
        
        <p v-if="!queryResponse.found && queryResponse.searchedFor">No user found.</p>
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