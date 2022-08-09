import { createSlice } from "@reduxjs/toolkit";
import moment from 'moment';
import { groupBy } from "lodash";

const initialState = {
    choosedMovieId: 1,
    sessionList:[],
}

const TheatreOnMovieListSlice = createSlice({
    name: "theatreOnMovieClick",
    initialState,
    reducers: {
        updateChooseMovie: (state, action) => {
            state.choosedMovieId = action.payload;
        },
        updateMoviewSession: (state, action) => {
            const sessionList = action.payload;
            state.sessionList = sessionList;
        },
    }
})
export default TheatreOnMovieListSlice.reducer;
export const { updateChooseMovie,updateMoviewSession } = TheatreOnMovieListSlice.actions;