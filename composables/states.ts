import { DocumentData } from "firebase/firestore";

export const searchedUserName = () => useState<string>("searchedUserName", () => "");
export const foundUser = () => useState<DocumentData | null>("foundUser", () => null);