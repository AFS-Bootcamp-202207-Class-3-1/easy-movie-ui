import { createSlice } from "@reduxjs/toolkit";

const initialState={
    keyWord:"",
}

export const movieSlice= createSlice({
    name:"movieSlice",
    initialState,
    reducers : {
        updateKeyWord:(state,action)=>{
            state.keyWord=action.payload;
        },
        clearKeyWord:(state,action)=>{
            state.keyWord="";
        }
    }
})
export const {updateKeyWord,clearKeyWord}=movieSlice.actions;
export default movieSlice.reducer;