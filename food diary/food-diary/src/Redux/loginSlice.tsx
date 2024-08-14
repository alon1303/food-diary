import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { getIsLoggedFromLocal } from "../localStorage";


const initialState = {
  value: getIsLoggedFromLocal(),
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
