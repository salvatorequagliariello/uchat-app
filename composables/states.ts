import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

export const searchedUserName = () => useState<string>("searchedUserName", () => "");
export const foundUser = () => useState("foundUser", () => ({
                                            userDetails: <DocumentData>{},
                                            errors: <boolean>false,
                                            found: false,
                                            searchedFor: false
                                        }));

export const userConversation = () => useState("userConversation", () => ({
                                            user: <DocumentData | null>null,
                                            conversation: <string[] | undefined | null>null,
                                            chatId: <string | null>null,
                                            errors: <boolean | null>null,
                                        }));

export const useFirebaseUser = () => useState<User | void>("firebaseUser", () => {});