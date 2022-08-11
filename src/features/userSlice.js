import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    saveUserData: (state, action) => action.payload,
    deleteUserData:() => ({}),
  },
});
export const { saveUserData, deleteUserData } = userSlice.actions;
export default userSlice.reducer;