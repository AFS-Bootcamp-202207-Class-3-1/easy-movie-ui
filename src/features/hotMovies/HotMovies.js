import "./HotMovies.less";
import HotMovieItem from "./HotMovieItem";
import { Col, Row } from "antd";
import { useState, useEffect } from "react";
import { getHotMovies } from "../../api/movie";

const HotMovies = () => {
  const [hotMovies, setHotMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getHotMovies();
      setHotMovies(data);
    }
    fetchData();
  }, []);

  const hotMovieList = hotMovies.map((movie) => {
    return (
      <Col span={6} key={movie.id}>
        <HotMovieItem movie={movie} />
      </Col>
    );
  });

  return (
    <div className="hot-movies">
      <h1 className="hot-movies-title">Hot Movies</h1>
      <Row gutter={[20, 20]}>{hotMovieList}</Row>
    </div>
  );
};

export default HotMovies;
