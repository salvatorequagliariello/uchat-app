import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { ChatUser, UserConversation } from "~/types/types";

export const searchedUserName = (): Ref<string>  => useState("searchedUserName", () => "");
export const foundUser = (): Ref<ChatUser> => useState("foundUser", () => ({
                                            userDetails: {},
                                            errors: false,
                                            found: false,
                                            searchedFor: false
}));

export const userConversation = (): Ref<UserConversation> => useState("userConversation", () => ({
                                            user: null,
                                            conversation: null,
                                            chatId: null,
                                            errors: null,
}));

export const useFirebaseUser = (): Ref<User | void> => useState("firebaseUser", () => {});
