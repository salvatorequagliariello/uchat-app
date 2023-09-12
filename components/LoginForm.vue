<script setup lang="ts">
    const formProps = defineProps({
        type: {
            type: String,
        }
    });

    const {login, signUp, errorBag} = useAuth();

    const onFileChanged = ($event: InputFileEvent) {
        const target = $event.target;
        if (target && target.files) {
            userForm.image = target.files[0];
        };
    };

    const userForm = reactive({
        email: "",
        password: "",
        name: "",
        image: ""
    });

    function handleSubmit() {
        if (formProps.type == "login") {
            login(userForm);
        } else if (formProps.type == "signup") {
            signUp(userForm);
        };
    };
</script>

<template>
    <p v-if="errorBag.firebaseSignUpErrors.isAnyError">Something went wrong! Please, try again with a different email address!</p>
    <p v-if="errorBag.firebaseLoginErrors.isAnyError">Something went wrong! Please, try again!</p>
    <form class="sign-in-form" @submit.prevent="handleSubmit">
        <div class="form-field">
            <input type="text" placeholder="Name" v-model="userForm.name" v-if="type == 'signup'" />
            <p v-if="errorBag.authErrors.name" ref="errorBag.authErrors.name">Please, enter a valid name.</p>
        </div>
        <div class="form-field">
            <input type="email" placeholder="Email" v-model="userForm.email"/>
            <p v-if="errorBag.authErrors.email">Please, enter a valid email address.</p>
        </div>
        <div class="form-field">
            <input type="password" placeholder="Password" v-model="userForm.password"/>
            <p v-if="errorBag.authErrors.password">Please, insert a valid password!</p>
        </div>
        <div class="form-field">
            <input type="file" accept="image/*" @change="onFileChanged($event)" v-if="type == 'signup'" />
            <p v-if="errorBag.authErrors.image">Image is required!</p>
        </div>
        <button type="submit">{{ type == "login" ? "Login" : "Register" }}</button>
    </form>
</template>

<style lang="scss" scoped>
    .sign-in-form {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        margin: 0 auto;
        gap: 2rem;
    };

    .form-field {
        display: flex;
        flex-direction: column;
    };

</style>