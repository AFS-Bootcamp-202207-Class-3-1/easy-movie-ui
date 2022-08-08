import MovieItem from "./MovieItem";

import { Col, Row } from "antd";
import "./movieGroup.css";
const MovieGroup = (props) => {
  const { movieList } = props;

  return (
    <>
      <div id="movieGroup">
        <Row gutter={[48, 48]}>
          {movieList.map((item, index) => (
              <Col key={item.movie_id} span={12}>
                {" "}
                <MovieItem  item={item} index={index} />{" "}
              </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default MovieGroup;
