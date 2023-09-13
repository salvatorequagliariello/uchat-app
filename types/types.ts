interface UserFormObj {
    name?: string,
    email: string,
    password: string,
    image?: File | Blob | Uint8Array | ArrayBuffer
}

interface ErrorBagObj {
    authErrors: {
        email: null | string,
        password: null | string,
        name: null | string,
        image: null | string
    },
    firebaseLoginErrors: {
        isAnyError: boolean,
        error: string | null | unknown,
    },
    firebaseSignUpErrors: {
        isAnyError: boolean,
        error: string | null | unknown,
    },
    uploadError: {
        isAnyError: boolean,
        error: string | null | unknown,
    }
}

interface InputFileEvent extends Event {
    target: HTMLInputElement;
}