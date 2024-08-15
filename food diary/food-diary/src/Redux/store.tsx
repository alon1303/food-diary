import { configureStore } from "@reduxjs/toolkit";
import userSlice, { setUser } from "./userSlice";
import { setUserToLocal } from "../localStorage";
import { IUser } from "../types";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export function setUserLocalAndStore(user: IUser) {
  setUserToLocal(user);

  store.dispatch(setUser(user));
}
// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
