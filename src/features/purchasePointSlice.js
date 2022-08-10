import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;
const purchasePointSlice = createSlice({
  name: "purchasePoint",
  initialState,
  reducers: {
    savePurchasePoint: (state, action) => action.payload,
  },
});
export const { savePurchasePoint } = purchasePointSlice.actions;
export default purchasePointSlice.reducer;