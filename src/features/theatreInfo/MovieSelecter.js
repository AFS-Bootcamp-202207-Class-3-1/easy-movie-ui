import "./MovieSelecter.less";
import TheatreOnMovieList from "../theatreInfo/TheatreOnMovieList";
import ChooseMovieInfo from "../theatreInfo/ChooseMovieInfo";
import MovieSessionList from "../theatreInfo/MovieSessionList";
import PerfectScrollbar from "react-perfect-scrollbar";

const MovieSelecter = ({ movieList }) => {
  return (
    <div className="movie-selecter">
      <div className="movie-selecter-movie-list-container">
        <PerfectScrollbar>
          <TheatreOnMovieList movieList={movieList} />
        </PerfectScrollbar>
      </div>
      <ChooseMovieInfo movieList={movieList} />

      <div className="movie-selecter-session-list-container">
        <div className="movie-selecter-session-list-container-sessionList fix-center-width">
          <div className="movie-selecter-session-list-container-sessionList-title">
            <span className="movie-selecter-session-list-container-sessionList-title-leftLine">
              ————————————
            </span>
            <span>Screening Schedule</span>
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
