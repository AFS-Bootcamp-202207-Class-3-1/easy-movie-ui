import {
  updateChooseMovie,
  updateMoviewSession,
} from "./TheatreOnMovieClickSlice";
import {useSelector, useDispatch} from "react-redux";
import {getSessionInfoById} from "../../api/cinemaInfo";
import "./TheatreOnMovieListItem.less";
import {useParams} from "react-router-dom";

function TheatreOnMovieListItem(props) {
  const dispatch = useDispatch();

  const movieItemClickId = useSelector(
    (state) => state.theatreOnMovieClick.choosedMovieId
  );
  const movieItemClick = parseInt(movieItemClickId) === parseInt(props.MovieId);
  const {theaterId} = useParams();
  const choiceMovie = () => {
    dispatch(updateChooseMovie(props.MovieId));

    async function fetchData() {
      const res1 = await getSessionInfoById(theaterId, props.MovieId); // 拿电影具体场次api
      if (res1) {
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
        />
      }
    </>
  );
}

export default TheatreOnMovieListItem;
