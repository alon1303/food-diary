import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserFromLocal } from "../localStorage";
import { IUser } from "../types";

const initialState = {
  value: getUserFromLocal(),
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      
      state.value = action.payload;
    }
  },
});

export const { setUser } = userSlice.actions;


export default userSlice;
