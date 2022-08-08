import "./NextMovies.less";
import NextMovieItem from "./NextMovieItem";
import { Col, Row } from "antd";

const NextMovies = () => {
  const nextMovies = [
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
