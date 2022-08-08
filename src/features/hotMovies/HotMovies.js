import "./HotMovies.less";
import HotMovieItem from "./HotMovieItem";
import { Col, Row } from "antd";

const HotMovies = () => {
  const hotMovies = [
    {
      id: 1,
      name: "明日战记",
      imageUrl:
        "https://p0.pipi.cn/mmdb/25bfd63302f0fa395b07accde068bfd3c361f.jpg?imageView2/1/w/160/h/220",
    },
    {
      id: 2,
      name: "明日战记",
      imageUrl:
        "https://p0.pipi.cn/mmdb/25bfd63302f0fa395b07accde068bfd3c361f.jpg?imageView2/1/w/160/h/220",
    },
    {
      id: 3,
      name: "明日战记",
      imageUrl:
        "https://p0.pipi.cn/mmdb/25bfd63302f0fa395b07accde068bfd3c361f.jpg?imageView2/1/w/160/h/220",
    },
    {
      id: 4,
      name: "明日战记",
      imageUrl:
        "https://p0.pipi.cn/mmdb/25bfd63302f0fa395b07accde068bfd3c361f.jpg?imageView2/1/w/160/h/220",
    },
    {
      id: 5,
      name: "明日战记",
      imageUrl:
        "https://p0.pipi.cn/mmdb/25bfd63302f0fa395b07accde068bfd3c361f.jpg?imageView2/1/w/160/h/220",
    },
    {
      id: 6,
      name: "明日战记",
      imageUrl:
        "https://p0.pipi.cn/mmdb/25bfd63302f0fa395b07accde068bfd3c361f.jpg?imageView2/1/w/160/h/220",
    },
    {
      id: 7,
      name: "明日战记",
      imageUrl:
        "https://p0.pipi.cn/mmdb/25bfd63302f0fa395b07accde068bfd3c361f.jpg?imageView2/1/w/160/h/220",
    },
    {
      id: 8,
      name: "明日战记",
      imageUrl:
        "https://p0.pipi.cn/mmdb/25bfd63302f0fa395b07accde068bfd3c361f.jpg?imageView2/1/w/160/h/220",
    },
  ];

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
