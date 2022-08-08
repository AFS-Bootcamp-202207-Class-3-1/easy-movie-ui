import MovieItem from "./MovieItem";

import { Col, Row } from "antd";
import "./movieGroup.css";
const MovieGroup = (props) => {
  const { movieList } = props;

  return (
    <>
      <div id="movieGroup">
        <Row className="movieGroupRow" gutter={[30, 30]}>
          {movieList.map((item, index) => (
              <Col key={item.id} span={12}>
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
