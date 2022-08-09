import {
  updateChooseMovie,
  updateMoviewSession,
} from "./TheatreOnMovieClickSlice";
import { useSelector, useDispatch } from "react-redux";
import { getSessionInfoById } from "../../api/cinemaInfo";
import "./TheatreOnMovieListItem.less";

function TheatreOnMovieListItem(props) {
  const dispatch = useDispatch();

  const movieItemClickId = useSelector(
    (state) => state.theatreOnMovieClick.choosedMovieId
  );
  const movieItemClick = movieItemClickId === props.MovieId;

  const choiceMovie = () => {
    dispatch(updateChooseMovie(props.MovieId));

    async function fetchData() {
      const res1 = await getSessionInfoById(1, props.MovieId); // 拿电影具体场次api
      if (res1 !== undefined) {
        dispatch(updateMoviewSession(res1.data));
      }
    }
    fetchData();
  };
  return (
    <>
      {
        <img
          className={
            movieItemClick
              ? "theater-on-movie-list-item-movie-item"
              : "theater-on-movie-list-item-movie-item-active"
          }
          onClick={choiceMovie}
          src={props.imageUrl}
          alt="example"
        ></img>
      }
    </>
  );
}

export default TheatreOnMovieListItem;
