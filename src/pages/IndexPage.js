import "./IndexPage.less";
import MovieCarousel from "../features/movieCarousel/MovieCarousel";
import Top100Movie from "../features/top100Movie/Top100Movie";
import HotMovies from "../features/hotMovies/HotMovies";
import { Row, Col } from "antd";

const Index = () => {
  return (
    <div className="index-page">
      <div>
        <MovieCarousel className="movie-carousel-component" />
      </div>
      <div className="top-100-and-hot-movie">
        <Row gutter={20}>
          <Col span={6}>
            <Top100Movie className="top-100-and-hot-movie-left" />
          </Col>
          <Col span={18}>
            <HotMovies className="top-100-and-hot-movie-right" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Index;
