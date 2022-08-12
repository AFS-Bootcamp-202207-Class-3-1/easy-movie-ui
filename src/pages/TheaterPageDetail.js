import "./sessionList.less";
import { useState, useEffect } from "react";
import { getCinemaInfoById, getSessionInfoById } from "../api/cinemaInfo";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  updateChooseMovie,
  updateMoviewSession,
} from "../features/theatreInfo/TheatreOnMovieClickSlice";
import TheaterHeader from "../features/theatreInfo/TheaterHeader";
import MovieSelecter from "../features/theatreInfo/MovieSelecter";
import PerfectScrollbar from "react-perfect-scrollbar";
import {BackTop} from "antd";

const TheaterPageDetail = (props) => {
  const [movieList, setmovieList] = useState([]);
  const [theater, setTheater] = useState({});

  const dispatch = useDispatch();
  const params = useParams();
  const theaterId = params.theaterId;
  const movieId = params.movieId || 1;
  dispatch(updateChooseMovie(movieId));

  useEffect(() => {
    async function fetchData() {
      const theaterRes = await getCinemaInfoById(theaterId);
      const sessionRes = await getSessionInfoById(theaterId, movieId);
      if (sessionRes) {
        dispatch(updateMoviewSession(sessionRes.data));
      }
      setmovieList(theaterRes.data.onMovieList);
      setTheater(theaterRes.data.theater);
    }
    fetchData();
  }, [theaterId, movieId, dispatch]);

  return (
    <PerfectScrollbar id="app-main-scroller-bar">
      <TheaterHeader theater={theater} />
      <MovieSelecter movieList={movieList} />
      <BackTop
        className="app-back-to-top"
        target={() => document.getElementById("app-main-scroller-bar")}
      />
    </PerfectScrollbar>
  );
};

export default TheaterPageDetail;
