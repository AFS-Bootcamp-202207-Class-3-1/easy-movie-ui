import "./Top100Movie.less";
import { Card, message } from "antd";
import TopMovieItem from "./TopMovieItem";
import { RightOutlined } from "@ant-design/icons";
import { getTop10Movie } from "../../api/movie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Top100Movie = () => {
  const navigate = useNavigate();

  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getTop10Movie();
        setTopMovies(data);
      } catch (error) {
        message.error(error.message);
      }
    }
    fetchData();
  }, []);

  const toMoviePage = (movieId) => {
    navigate(`/movieDetail/${movieId}`);
  }

  useEffect(() => {});

  const top10MovieList = topMovies.map((movie, index) => {
    return (
      <div key={movie} className="top-100-movie-item" onClick={() => toMoviePage(movie.id)}>
        <TopMovieItem index={index + 1} name={movie.name} score={movie.score} />
      </div>
    );
  });

  return (
    <Card className="top-100-movie">
      <div className="top-100-movie-header">
        <div className="top-100-movie-header-title">Top 10</div>
        <div className="top-100-movie-header-more">
        </div>
      </div>
      {top10MovieList}
    </Card>
  );
};

export default Top100Movie;
