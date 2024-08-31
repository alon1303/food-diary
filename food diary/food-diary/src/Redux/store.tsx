import { configureStore } from "@reduxjs/toolkit";
import userSlice, { setUser } from "./userSlice";
import {
  removeDiaryIdFromLocal,
  removeUserFromLocal,
  setDiaryIdToLocal,
  setUserToLocal,
  setPageIdToLocal
} from "../localStorage";
import { IUser } from "../types";
import { setDiaryId, setPageId } from "./diarySlice";
import idsSlice from "./diarySlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    ids: idsSlice.reducer,
  },
});

export function setUserLocalAndStore(user: IUser) {
  setUserToLocal(user);

  store.dispatch(setUser(user));
}
export function removeUserFromLocalAndStore() {
  const emptyUser: IUser = { user_name: "", is_logged: false };
  store.dispatch(setUser(emptyUser));
  removeUserFromLocal();
}
export function setDiaryIdLocalAndStore(diaryId: string) {
  setDiaryIdToLocal(diaryId);

  store.dispatch(setDiaryId(diaryId));
}
export function setPageIdLocalAndStore(pageId: string) {
  setPageIdToLocal(pageId);
  
  store.dispatch(setPageId(pageId));
}
// export function removeDiaryIdFromLocalAndStore() {
//   store.dispatch(setDiaryId(""));
//   removeDiaryIdFromLocal();
// }

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
