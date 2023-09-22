<script setup lang="ts">
    const formProps = defineProps({
        type: {
            type: String,
        }
    });

    const {login, signUp, errorBag} = useAuth(); 
    const userForm: UserFormObj = reactive({
        email: "",
        password: "",
        name: "",
        image: undefined 
    });

    const onFileChanged = function ($event: Event): void {
        const target =  <HTMLInputElement>$event.target;
        if (target && target.files) {
            userForm.image = target.files[0];
        };
    };

    const handleSubmit = async function (): Promise<void> {
        if (formProps.type == "login") {
            await login(userForm);
        } else if (formProps.type == "signup") {
            await signUp(userForm);
        };
    };
</script>

<template>
    <form class="auth-form" @submit.prevent="handleSubmit">
        <p v-if="errorBag?.firebaseSignUpErrors.isAnyError">Something went wrong! Please, try again with a different email address!</p>
        <p v-if="errorBag?.firebaseLoginErrors.isAnyError">Something went wrong! Please, try again!</p>
        <div class="auth-form__field">
            <input type="text" placeholder="Name" v-model="userForm.name" v-if="type == 'signup'" />
            <p v-if="errorBag?.authErrors.name" ref="errorBag.authErrors.name">Please, enter a valid name.</p>
        </div>
        <div class="auth-form__field">
            <input type="email" placeholder="Email" v-model="userForm.email"/>
            <p v-if="errorBag?.authErrors.email">Please, enter a valid email address.</p>
        </div>
        <div class="auth-form__field">
            <input type="password" placeholder="Password" v-model="userForm.password"/>
            <p v-if="errorBag?.authErrors.password">Please, insert a valid password!</p>
        </div>
        <div class="auth-form__field">
            <input type="file" accept="image/*" @change="onFileChanged($event)" v-if="type == 'signup'" />
            <p v-if="errorBag?.authErrors.image">Image is required!</p>
        </div>
        <button type="submit">{{ type == "login" ? "Sign in" : "Sign up" }}</button>
    </form>
</template>

<style lang="scss" scoped>
    .auth-form {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        margin: 0 auto;
        gap: 2rem;
    }

    .form-field {
        display: flex;
        flex-direction: column;
    }
</style>