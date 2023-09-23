<script setup lang="ts">
import { Icon } from '@iconify/vue';

    const searchedUser = searchedUserName();
    const queryResponse = foundUser().value;

    const eraseSearch = () => {
        queryResponse.userDetails = {};
        queryResponse.errors = false;
        queryResponse.searchedFor = false;
        queryResponse.found = false;
        searchedUser.value = "";
    };

    const addUserToChats = () => {
        addUser(queryResponse.userDetails);
        eraseSearch();
    };

</script>


<template>
    <div class="user-search">
        <div class="search-bar">
            <div class="search-input">
                <button @click="getUsers(searchedUser)" class="search-button">
                    <Icon icon="bi:search" class="icon"/>
                </button>
                <input type="text" placeholder="Search users" v-model="searchedUser"/>
            </div>
            <button @click="eraseSearch" class="cancel-button" v-if="queryResponse.searchedFor">
                <Icon icon="ph:x" class="icon" />
            </button>
        </div>

        <div v-if="queryResponse.found && queryResponse.searchedFor" class="search-result">
            <div class="search-result__details">
                <img :src="`${queryResponse?.userDetails.photoUrl}`" />
                <p>{{ queryResponse?.userDetails.name }}</p>
            </div>
            <button @click="addUserToChats">
                <Icon icon="mdi:user-add" class="icon" aria-label="Add friend"/>
            </button>
        </div>
        
        <p v-if="!queryResponse.found && queryResponse.searchedFor" class="no-response__message">
            No user found.
        </p>
    </div>
</template>


<style scoped lang="scss">
@import '~/assets/css/main.scss';
    .user-search {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .search-bar {
        width: 100%;
        display: flex;
        justify-content: space-between;

        border-radius: 1rem;
        background-color: $alt-secondary-color;
        padding: 0.5rem;

        .search-input {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        input {
            flex: 1;

            border: none;
            background: none;
            color: $text-color;
            &:focus {
                outline: none !important; 
            }
        }

        button {
            flex: 1;

            border: none;
            background: none;
            cursor: pointer;

            .icon {
                width: 20px;
                height: 20px;
                color: $text-color;

                &:hover {
                    color: $text-hover-color;
                }
            }
        }
    }
    
    .search-result {
        width: 100%;
        margin: 1rem auto 0;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        color: $text-color;
        
        button {
            background-color: $accent-color;
            border-radius: 100%;
            border-style: none;

            display: flex;
            flex-direction: column;
            align-items: center;
            
            padding: 0.5rem;
            color: $text-color;
            font-weight: 600;
            font-size: 0.8rem;

            &:hover {
                background-color: $accent-color-hover;
                cursor: pointer;
            }
            
            .icon {
                width: 20px;
                height: 20px;
                color: $text-color;
            }
        }
    }
    .no-response__message {
        color: $text-color;
        margin-left: 1rem;
        margin-top: 1rem;
    }
    
    .search-result__details {
        display: flex;
        align-items: center;
        gap: 1rem;
        
        img {
            display: inline;
            height: 45px;
            width: 45px;
    
            border-radius: 100%;
        }
    }
</style>