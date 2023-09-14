import { User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

export const searchedUserName = () => useState<string>("searchedUserName", () => "");
export const foundUser = () => useState("foundUser", () => ({
                                            userDetails: <DocumentData>{},
                                            errors: <boolean>false,
                                            found: false,
                                            searchedFor: false
}));