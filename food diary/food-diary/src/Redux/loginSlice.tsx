import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";


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
