interface UserFormObj {
    name?: string,
    email: string,
    password: string,
    image?: File,
}

interface ErrorBagObj {
    (authErrors: Object): {
        email: null | string,
        password: null | string,
        name: null | string,
        image: null | string
    },
    (firebaseLoginErrors: Object): {
        isAnyError: boolean,
        error: string | null,
    },
    (firebaseSignUpErrors: Object): {
        isAnyError: boolean,
        error: string | null,
    },
    (uploadError: Object): {
        isAnyError: boolean,
        error: string | null,
    }
}

interface InputFileEvent extends Event {
    target: HTMLInputElement;
}