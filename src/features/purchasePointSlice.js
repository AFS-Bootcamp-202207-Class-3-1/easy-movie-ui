import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 0
};
const purchasePointSlice = createSlice({
  name: "purchasePoint",
  initialState,
  reducers: {
    savePurchasePoint: (state, action) => {
      state.points = action.payload;
    },
  },
});
export const { savePurchasePoint } = purchasePointSlice.actions;
export default purchasePointSlice.reducer;