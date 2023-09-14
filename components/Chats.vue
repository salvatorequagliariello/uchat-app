<script setup lang="ts">
    const findChats = getUserChats();
    const chats = userChats();
    console.log(Object.entries(chats))
    console.log(chats)
</script>


<template>
    <div class="chat-previews">
        <div class="chat-preview__container">
            <p>img</p>
            <div class="chat-preview__details">
                <p>Name</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
        </div>
    </div>
</template>


<style scoped>

    .chat-previews {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 1rem;
    }
    
    .chat-preview__container {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        align-items: center;
        background-color: white;
        border-radius: 20px;
        padding: 0.5rem 1rem;
    }

</style>