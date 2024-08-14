import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserNameFromLocal } from "../localStorage";

const initialState = {
  value: getUserNameFromLocal(),
};
const userNameSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
       
      state.value = action.payload;
    }
  },
});

export const { setName } = userNameSlice.actions;


export default userNameSlice;
