import { IUser } from "../types";

export function getUserFromLocal() {
  const user = localStorage.getItem("user");
  const parsed_user:IUser = user !== null ?  JSON.parse(user) : null;
  return parsed_user
}
export function setUserToLocal(user: IUser) {
  try {
    const user_stringify = JSON.stringify(user)
    localStorage.setItem("user", user_stringify);
  } catch (e) {
    console.error("Could not set username to Local Storage", e);
  }
}
export function removeUserFromLocal(){
  try{
    localStorage.removeItem('user')
  }catch(e){
    console.error("Could not remove User from local storage ", e)
  }
}
