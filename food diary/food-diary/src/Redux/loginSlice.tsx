import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  } from "../localStorage";


const initialState = {
  value: false,
};
const isLoggedSlice = createSlice({
  name: "isLogged",
  initialState,
  reducers: {
    setisLogged(state, action: PayloadAction<boolean>) {
       
      state.value = action.payload;
    }
  },
});

export const { setisLogged } = isLoggedSlice.actions;


export default isLoggedSlice;
