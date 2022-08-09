import { configureStore } from "@reduxjs/toolkit";
import theatreOnMovieClickReducer from "../features/theatreInfo/TheatreOnMovieClickSlice"


export default configureStore({
  reducer: {
    theatreOnMovieClick: theatreOnMovieClickReducer
  }
});
