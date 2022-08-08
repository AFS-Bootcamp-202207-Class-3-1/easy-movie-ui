import "./IndexPage.less";
import MovieCarousel from "../features/movieCarousel/MovieCarousel";
import Top100Movie from "../features/top100Movie/Top100Movie";
import HotMovies from "../features/hotMovies/HotMovies";
import { Row, Col } from "antd";
import NextMovies from "../features/nextMovies/NextMovies";

const Index = () => {
  return (
    <div className="index-page">
      <div>
        <MovieCarousel className="movie-carousel-component" />
      </div>
      <div className="top-100-and-hot-movie">
        <Row gutter={20}>
          <Col span={6}>
            <Top100Movie />
          </Col>
          <Col span={18}>
            <HotMovies />
          </Col>
        </Row>
      </div>
      <div className="ad-and-next-movie">
        <Row gutter={20}>
          <Col span={6}>
            <img src="assets/ad.png" alt="ad" />
          </Col>
          <Col span={18}>
            <NextMovies />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Index;
