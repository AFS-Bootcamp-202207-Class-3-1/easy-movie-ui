import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../features/userSlice'
import theatreOnMovieClickReducer from "../features/theatreInfo/TheatreOnMovieClickSlice"


export default configureStore({
  reducer: {
    theatreOnMovieClick: theatreOnMovieClickReducer,
    userInfo: userSlice,
  }
});
