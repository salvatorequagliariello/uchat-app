<script setup lang="ts">
       const userDetails = useFirebaseUser().value;
       console.log(userDetails);

       if (!userDetails) {
        navigateTo("/loading");
       };
</script>

<template>
    <div class="homepage">
        <div class="app-view">
            <div class="app-container">
                <div class="chats-container" v-if="userDetails">
                    <UserHeader :user="userDetails" />
                    <UsersSearch />
                    <ChatsPreview />
                </div>
                <div class="chat-view">
                    <ChatView />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ul {
        list-style-type: none;
    }

    .app-view {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,  -50%);
        width: 1000px;
        height: 700px;
        background-color: darkgrey;
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }

    .app-container {
        display: flex;
        margin-top: 2rem;
        height: 100%;
    }

    .chats-container {
        flex: 0.75;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 1rem;
        width: 100%;

        background-color: rgb(55, 55, 55);
    }

    .chat-view {
        flex: 1.25;
        background-color: brown;
        display: flex;
    }

    .user-details {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: black;
        width: 100%;
        color: white;
        padding: 1rem;
    }

    .user-details img {
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }
</style>