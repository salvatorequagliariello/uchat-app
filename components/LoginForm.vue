<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { UserFormObj } from '~/types/types';

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

    const invalid: string = "invalid";
</script>

<template>
    <form class="auth-form" @submit.prevent="handleSubmit">
        <h2>{{ type == "login" ? "Sign in" : "Sign up" }}</h2>
        <p class="error-message auth-errors" v-if="errorBag?.firebaseSignUpErrors.isAnyError">
            Something went wrong! Please, try again with a different email address!
        </p>
        <p class="error-message auth-errors" v-if="errorBag?.firebaseLoginErrors.isAnyError">
            Something went wrong! Please, try again!
        </p>
        <div class="auth-form__field" v-if="type == 'signup'">
            <input 
                type="text" 
                placeholder="Name" 
                v-model="userForm.name" 
                :class="errorBag?.authErrors.name && invalid"
            />
            <p class="error-message" v-if="errorBag?.authErrors.name" ref="errorBag.authErrors.name">
                Please, enter a valid name.
            </p>
        </div>
        <div class="auth-form__field">
            <input 
                type="email" 
                placeholder="Email" 
                v-model="userForm.email"
                :class="errorBag?.authErrors.email && invalid"
            />
            <p class="error-message" v-if="errorBag?.authErrors.email">
                Please, enter a valid email address.
            </p>
        </div>
        <div class="auth-form__field">
            <input 
                type="password" 
                placeholder="Password" 
                v-model="userForm.password" 
                :class="errorBag?.authErrors.password && invalid"
            />
            <p class="error-message" v-if="errorBag?.authErrors.password">
                Please, enter a valid password.
            </p>
        </div>
        <div class="auth-form__field file-input" v-if="type == 'signup'">
            <input 
                type="file" 
                accept="image/*" 
                @change="onFileChanged($event)" 
                id="image-input"
            />
            <label for="image-input">
                <Icon icon="mdi:image-add-outline" class="icon"/>
                <p>{{ userForm.image ? "Avatar uploaded" : "Add an avatar" }}</p>
            </label>
            <p class="error-message" v-if="errorBag?.authErrors.image">Image is required!</p>
        </div>
        <button type="submit">{{ type == "login" ? "Sign in" : "Sign up" }}</button>
        <NuxtLink :to="type == 'login' ? '/sign-up' : '/sign-in'">
            {{ type == "login" ? "New to uChat? Join now!" : "Already have an account? Sign in!" }}
        </NuxtLink>
    </form>
</template>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';
    .auth-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        color: $text-color;

        h2 {
            margin-bottom: 1rem;
        }

        button {
            width: 50%;
            margin-top: 1rem;

            color: $text-color;
            background-color: $accent-color;
            border: none;
            border-radius: 1rem;
            padding: 0.5rem 0;
            font-size: 1.25rem;
            font-weight: 600;

            &:hover {
                background-color: $accent-color-hover;
                cursor: pointer;
            }
        }

        a {
            margin-top: 2rem;
            border-bottom: 1px solid $text-color;

            &:hover {
                color: $text-hover-color;
            }
        }
    }

    .auth-errors {
        padding: 0.5rem;

        border-radius: 0.5rem;
        background-color: $error-color;
        color: $text-color;
        font-size: 0.875rem;
    }

    .auth-form__field {
        display: flex;
        flex-direction: column;
        width: 90%;

        input {
            padding: 0.5rem;

            background: none;
            border: 2px solid $accent-color;
            border-radius: 0.5rem;

            color: $text-color;

            &:focus {
                outline: none !important;
                border: 2px solid $text-color;
            }
        }

        .invalid {
            border: 2px solid $error-color;
        }

        .error-message {
            margin-top: 0.250rem;
            font-size: 0.875rem;
            color: $error-color;
        }
    }

    input[type=file] {
        display: none;
    }

    label {
        display: flex;
        align-items: center;
        gap: 1rem;

        padding: 0.5rem;
        border: 2px solid $accent-color;
        border-radius: 0.5rem;
        cursor: pointer;
        
        p {
            opacity: 0.4;
        }

        .icon {
            width: 30px;
            height: 30px;
            color: $accent-color;
        }
    }
</style>