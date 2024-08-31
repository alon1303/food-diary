import { IUser } from "../types";

export function getUserFromLocal() {
  const user = localStorage.getItem("user");
  const parsed_user: IUser = user !== null ? JSON.parse(user) : null;
  return parsed_user;
}
export function setUserToLocal(user: IUser) {
  try {
    const user_stringify = JSON.stringify(user);
    localStorage.setItem("user", user_stringify);
  } catch (e) {
    console.error("Could not set username to Local Storage", e);
  }
}
export function removeUserFromLocal() {
  try {
    localStorage.removeItem("user");
  } catch (e) {
    console.error("Could not remove User from local storage ", e);
  }
}
export function getDiaryIdFromLocal() {
  const diaryId = localStorage.getItem("diaryId");
  const parsedDiaryId: string = diaryId !== null ? JSON.parse(diaryId) : null;
  return parsedDiaryId;
}
export function setDiaryIdToLocal(diaryId: string) {
  try {
    localStorage.setItem("diaryId", diaryId);
  } catch (e) {
    console.error("Could not set diaryId to Local Storage", e);
  }
}
export function removeDiaryIdFromLocal() {
  try {
    localStorage.removeItem("diaryId");
  } catch (e) {
    console.error("Could not remove diaryId from local storage ", e);
  }
}
export function setPageIdToLocal(pageId: string) {
  try {
    localStorage.setItem("pageId", pageId);
  } catch (e) {
    console.error("set page id local error!: ", e);
  }
}
