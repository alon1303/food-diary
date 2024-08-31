import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ids } from "../types";


const ids:Ids = {diaryId:undefined, pageId:undefined}
const initialState = {
  value: ids,
};
const idsSlice = createSlice({
  name: "ids",
  initialState,
  reducers: {
    setDiaryId(state, action: PayloadAction<string>) {
      
      state.value.diaryId = action.payload;
    },
    setPageId(state, action: PayloadAction<string>){
      state.value.pageId = action.payload;
    }
  },
});

export const { setDiaryId,setPageId } = idsSlice.actions;


export default idsSlice;
