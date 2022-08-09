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

const TheaterPageDetail = (props) => {
  const [movieList, setmovieList] = useState([]);
  const [theater, setTheater] = useState({});

  const dispatch = useDispatch();
  const { theaterId, movieId } = useParams();

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
  }, []);

  if (movieList[0]) {
    if (props.choosedMovieId) {
    } else {
      dispatch(updateChooseMovie(movieList[0].id));
    }
  }

  return (
    <>
      <TheaterHeader theater={theater} />
      <MovieSelecter movieList={movieList} />
    </>
  );
};

export default TheaterPageDetail;
