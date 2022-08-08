import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/movieList/movieSlice";

export default configureStore({
  reducer: {
    movie:movieSlice
  },
});
