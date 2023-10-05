import { DocumentData } from "firebase/firestore";

export interface UserFormObj {
    name?: string,
    email: string,
    password: string,
    image?: File | Blob | Uint8Array | ArrayBuffer | undefined
}

export interface ErrorBagObj {
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

export interface Message {
    text: string | null,
    img: File | Blob | Uint8Array | ArrayBuffer | null | any
}

export interface InputFileEvent extends Event {
    target: HTMLInputElement;
}

export interface MessageObj {
    id: string,
    img?: string | null,
    senderId: string,
    text: string | null,
    date: Date
}

export interface ChatUser {
    userDetails: DocumentData,
    errors: boolean,
    found: boolean,
    searchedFor: boolean
}

export interface UserConversation {
    user: DocumentData | null,
    conversation: string[] | null,
    chatId: string | null,
    errors: boolean | null
}