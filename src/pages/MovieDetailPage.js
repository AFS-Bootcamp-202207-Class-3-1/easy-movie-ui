import { useNavigate } from "react-router-dom";
import { Rate, Button, Image, Avatar } from "antd";
import {
  DribbbleOutlined,
  FieldTimeOutlined,
  LineChartOutlined,
  HeartOutlined,
  LikeOutlined,FireOutlined,
} from "@ant-design/icons";

import "../layout/MovieDetail.less";
import moviePng from "../static/movie.png";
import photoPng from "../static/photo.png";
import castPng from "../static/cast.png";
import BackToMovieList from "../features/backToMovieList/BackToMovieList";

const MovieDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div className="MovieDetail">
      <BackToMovieList />
      {/* 电影信息 开始 */}
      <div className="movieInfo w">
        <div className="left">
          <img src={moviePng} alt="" srcset="" />
        </div>
        <div className="right">
          <span className="name_wrap">
            <span className="name">电影名 <span className="hot"><FireOutlined />
            <span className="num">9.5</span> </span> </span>
          </span>
          <div className="type">动作 科幻 冒险</div>
          <div className="time">
            <div className="date_country">
              <DribbbleOutlined />
              <span>2022-07-31中国大陆</span>
              <span className="runtime">
                <FieldTimeOutlined />
                <span>99分钟</span>
              </span>
            </div>
          </div>
          <span className="ticket">
            <LineChartOutlined />
            <span>$ 200.78 million </span>
          </span>
          <div className="score_wrap">
            <div className="totalScore score">
              <span className="num">4.5</span>
              <Rate allowHalf disabled value={4.5} />
              <p className="info">Total Score</p>
            </div>
            <div className="userScore score">
              <span className="num">4.5</span>
              <Rate allowHalf disabled value={4.5} />
              <p className="info">My Score</p>
            </div>
            <div className="buy_btn">
              <Button type="primary">Buy Ticket</Button>
            </div>
          </div>
        </div>
        {/* 电影信息 结束 */}
      </div>
      {/* 楼层 开始 */}
      <ul className="detail w">
        {/* 剧照 开始 */}
        <li className="detailItem">
          <div className="title">
            <i className="before"></i>
            <span className="titleName">Stage Photo</span>
          </div>
          <div className="content photo">
            <Image src={photoPng} alt="" />
            <Image src={photoPng} alt="" />
            <Image src={photoPng} alt="" />
          </div>
        </li>
        {/* 剧照 结束 */}
        {/* 剧情简介 开始 */}
        <li className="detailItem">
          <div className="title">
            <i className="before"></i>
            <span className="titleName">Plot Introduction</span>
          </div>
          <div className="content introduction">
            <span>
              High score hot hot reflection! Louis Koo appointed chief
              supervisor! Chinese science fiction Annual shock show! Mecha vs.
              alien, hardcore home guard! The future world earth pollution is
              serious, an outer space meteorite suddenly, with the alien life
              body Pandora arrived on earth, attack human beings. Air combat
              troop Tai comes (Gu Tianle is acted the role of) with captain
              Zheng reborn (Liu Qingyun is acted the role of) go to execute the
              task that saves the earth, encounter the monster attack that has
              never seen however, machine armor legion and alien abnormity
              creature spread out super burning big war, defend home with all
              sorts of difficulties, staged the exciting great duel of a
              hanchang Li. However, the mysterious signal that discovers
              accidentally on the body of sacrifice teammate, let Tai begins to
              think what is the truth after all, what is really deadly is not
              everything at present, however a huge plot in the fog behind
              oneself...
            </span>
          </div>
        </li>
        {/* 剧情简介 结束 */}
        {/* CAST 开始 */}
        <li className="detailItem">
          <div className="title">
            <i className="before"></i>
            <span className="titleName">CAST</span>
          </div>
          <div className="content cast">
            <div className="item">
              <img src={castPng} alt="" />
              <span className="name">Edward</span>
              <br />
              <span className="position">导演</span>
            </div>
            <div className="item">
              <img src={castPng} alt="" />
              <span className="name">Lewis</span>
              <br />
              <span className="position">导演</span>
            </div>
            <div className="item">
              <img src={castPng} alt="" />
              <span className="name">Carlos</span>
              <br />
              <span className="position">导演</span>
            </div>
          </div>
        </li>
        {/* CAST 结束 */}
        {/* 热门评价 开始 */}
        <li className="detailItem">
          <div className="title">
            <i className="before"></i>
            <span className="titleName">Hot Comments</span>
          </div>
          <ul className="content comment">
            {/* 单条评价 开始 */}
            <li className="commentItem">
              <div className="head">
                <img src={castPng} alt="" />
                <span className="name"> Melenie</span>
                <span className="time"> 几秒前</span>
              </div>
              <div className="body">
                High score hot hot reflection! Louis Koo appointed chief
                supervisor! Chinese science fiction Annual shock show! Mecha vs.
                alien, hardcore home guard! The future world earth pollution is
                serious, an outer space meteorite suddenly, with the alien life
                body Pandora arrived on earth, attack human beings.
                <div className="like">
                  <span className="num">4</span>
                  <LikeOutlined />
                </div>
              </div>
            </li>
            {/* 单条评价 结束 */}
            {/* 单条评价 开始 */}
            <li className="commentItem">
              <div className="head">
                <img src={castPng} alt="" />
                <span className="name"> Melenie</span>
                <span className="time"> 几秒前</span>
              </div>
              <div className="body">
                High score hot hot reflection! Louis Koo appointed chief
                supervisor! Chinese science fiction Annual shock show! Mecha vs.
                alien, hardcore home guard! The future world earth pollution is
                serious, an outer space meteorite suddenly, with the alien life
                body Pandora arrived on earth, attack human beings.
                <div className="like">
                  <span className="num">4</span>
                  <LikeOutlined />
                </div>
              </div>
            </li>
            {/* 单条评价 结束 */}
            {/* 单条评价 开始 */}
            <li className="commentItem">
              <div className="head">
                <img src={castPng} alt="" />
                <span className="name"> Melenie</span>
                <span className="time"> 几秒前</span>
              </div>
              <div className="body">
                High score hot hot reflection! Louis Koo appointed chief
                supervisor! Chinese science fiction Annual shock show! Mecha vs.
                alien, hardcore home guard! The future world earth pollution is
                serious, an outer space meteorite suddenly, with the alien life
                body Pandora arrived on earth, attack human beings.
                <div className="like">
                  <span className="num">4</span>
                  <LikeOutlined />
                </div>
              </div>
            </li>
            {/* 单条评价 结束 */}
          </ul>
        </li>
        {/* 热门评价 结束 */}
      </ul>
      {/* 楼层 结束 */}
    </div>
  );
};

export default MovieDetailPage;
