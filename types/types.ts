interface UserFormObj {
    name?: string,
    email: string,
    password: string,
    image?: File | Blob | Uint8Array | ArrayBuffer | undefined
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

interface Message {
    text: string | null,
    img: File | Blob | Uint8Array | ArrayBuffer | null | any
}

interface InputFileEvent extends Event {
    target: HTMLInputElement;
}

interface MessageObj {
    id: string,
    img?: string | null,
    senderId: string,
    text: string | null,
    date: Date
}