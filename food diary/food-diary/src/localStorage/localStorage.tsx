import { IUser } from "../types";

export function getUserFromLocal() {
  const user = localStorage.getItem("username");
  const parsed_user:IUser = user !== null ?  JSON.parse(user) : null;
  return parsed_user
}
export function setUserToLocal(user: IUser) {
  try {
    const user_stringify = JSON.stringify(user)
    localStorage.setItem("username", user_stringify);
  } catch (e) {
    console.error("Could not save username to Local Storage", e);
  }
}
