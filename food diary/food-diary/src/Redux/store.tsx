import { configureStore } from "@reduxjs/toolkit";
import userNameSlice from "./userSlice";
import isLoggedSlice from "./loginSlice";
export const store = configureStore({
  reducer: { 
    userName: userNameSlice.reducer, 
    isLogged: isLoggedSlice.reducer 
  },
});
// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
