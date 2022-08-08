import "./Top100Movie.less";
import { Card } from "antd";
import TopMovieItem from "./TopMovieItem";
import {RightOutlined} from '@ant-design/icons';

const Top100Movie = () => {
  const top10Movies = [
    "我不是药神",
    "肖申克的救赎",
    "绿皮书",
    "海上钢琴师",
    "霸王别姬",
    "美丽人生",
    "阿甘正传",
    "怦然心动",
    "哪吒之魔童降世",
    "这个杀手不太冷",
  ];

  const top10MovieList = top10Movies.map((movie, index) => {
    return (
      <div key={movie} className="top-100-movie-item">
        <TopMovieItem index={index + 1} name={movie} score="5.0" />
      </div>
    );
  });

  return (
    <Card className="top-100-movie">
      <div className="top-100-movie-header">
        <div className="top-100-movie-header-title">Top 100</div>
        <div className="top-100-movie-header-more">More <RightOutlined /></div>
      </div>
      {top10MovieList}
    </Card>
  );
};

export default Top100Movie;
