import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserFromLocal } from "../localStorage";
import { IUser } from "../types";
const emptyUser:IUser = {_id:undefined,user_name:"", is_logged:false}
const initialUser = getUserFromLocal() !== null ? getUserFromLocal(): emptyUser;
const initialState = {
  value: initialUser,
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
