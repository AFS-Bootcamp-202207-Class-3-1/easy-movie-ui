import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    saveUserData: (state, action) => action.payload,
  },
});
export const { saveUserData } = userSlice.actions;
export default userSlice.reducer;