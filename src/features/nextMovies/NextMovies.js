import "./NextMovies.less";
import NextMovieItem from "./NextMovieItem";
import { Col, Row } from "antd";
import { useState, useEffect } from "react";
import { getNextMovies } from "../../api/movie";

const NextMovies = () => {
  const [nextMovies, setNextMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getNextMovies();
      setNextMovies(data);
    }
    fetchData();
  }, []);

  const nextMovieList = nextMovies.map((movie) => {
    return (
      <Col span={6} key={movie.id}>
        <NextMovieItem movie={movie} />
      </Col>
    );
  });

  return (
    <div className="next-movies">
      <h1 className="next-movies-title">Upcoming Movies</h1>
      <Row gutter={[20, 20]}>{nextMovieList}</Row>
    </div>
  );
};

export default NextMovies;
