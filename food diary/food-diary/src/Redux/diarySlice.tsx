import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../types";
const emptyUser:IUser = {user_name:"", is_logged:false}

const initialState = {
  value: "",
};
const diaryIdSlice = createSlice({
  name: "diaryId",
  initialState,
  reducers: {
    setDiaryId(state, action: PayloadAction<string>) {
      
      state.value = action.payload;
    }
  },
});

export const { setDiaryId } = diaryIdSlice.actions;


export default diaryIdSlice;
