export function getUserNameFromLocal() {
  const username = localStorage.getItem("username");
  return username;
}
export function setUserNameToLocal(username: string) {
  try {
    localStorage.setItem("username", username);
  } catch (e) {
    console.error("Could not save username to Local Storage", e);
  }
}
export function setIsLoggedToLocal(isLogged: boolean) {
  try {
    localStorage.setItem("isLogged", isLogged.toString());
  } catch (e) {
    console.error("Could not save isLogged to Local Storage", e);
  }
}
export function getIsLoggedFromLocal() {
  const isLogged = localStorage.getItem("isLogged");

  return isLogged === "true" ? true : false;
}
