import "./MovieSelecter.less";
import TheatreOnMovieList from "../theatreInfo/TheatreOnMovieList";
import ChooseMovieInfo from "../theatreInfo/ChooseMovieInfo";
import MovieSessionList from "../theatreInfo/MovieSessionList";

const MovieSelecter = ({ movieList }) => {
  return (
    <div className="movie-selecter">
      <div className="movie-selecter-movie-list-container">
        <div className="movie-selecter-movie-list-container-movie-list">
          <TheatreOnMovieList movieList={movieList} />
        </div>
      </div>
      <ChooseMovieInfo movieList={movieList} />

      <div className="movie-selecter-session-list-container">
        <div className="movie-selecter-session-list-container-sessionList fix-center-width">
          <div className="movie-selecter-session-list-container-sessionList-title">
            <span className="movie-selecter-session-list-container-sessionList-title-leftLine">
              ————————————
            </span>
            <span>放映场次</span>
            <span className="movie-selecter-session-list-container-sessionList-title-rightLine">
              ————————————
            </span>
          </div>

          <div className="movie-selecter-session-list-container-sessionList-body">
            <MovieSessionList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSelecter;
