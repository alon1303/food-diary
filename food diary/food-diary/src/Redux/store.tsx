import { configureStore } from "@reduxjs/toolkit";
import userNameSlice, { setName } from "./userSlice";
import isLoggedSlice, { setisLogged } from "./loginSlice";
import { useAppDispatch } from "./hooks";
import {
  getIsLoggedFromLocal,
  setIsLoggedToLocal,
  setUserNameToLocal,
} from "../localStorage";
export const store = configureStore({
  reducer: {
    userName: userNameSlice.reducer,
    isLogged: isLoggedSlice.reducer,
  },
});

export function setIsLoggedLocalAndStore(isLogged: boolean) {
  setIsLoggedToLocal(isLogged);

  store.dispatch(setisLogged(isLogged));
}
export function setUserNameLocalAndStore(username: string) {
  setUserNameToLocal(username);

  store.dispatch(setName(username));
}
// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
