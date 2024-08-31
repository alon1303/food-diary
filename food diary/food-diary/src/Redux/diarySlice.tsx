import { createSlice, PayloadAction } from "@reduxjs/toolkit";



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
