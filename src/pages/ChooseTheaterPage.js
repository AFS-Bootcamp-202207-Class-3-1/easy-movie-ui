import { useNavigate } from "react-router-dom";
import { Rate, Button, Image, Avatar,Space, Table, Tag } from "antd";
import {
  DribbbleOutlined,
  FieldTimeOutlined,
  LineChartOutlined,
  HeartOutlined,
  LikeOutlined,
  FireOutlined,
} from "@ant-design/icons";

import "../layout/ChooseTheaterPage.less";
import moviePng from "../static/movie.png";
import photoPng from "../static/photo.png";
import castPng from "../static/cast.png";
import BackToMovieList from "../features/backToMovieList/BackToMovieList";

const ChooseTheaterPage = () => {

    



  return (
    <div className="ChooseTheaterPage">
      {/* 电影信息 开始 */}
      <div className="movieInfo w">
        <div className="left">
          <img src={moviePng} alt="" srcset="" />
        </div>
        <div className="right">
          <span className="name_wrap">
            <span className="name">
              电影名{" "}
              <span className="hot">
                <FireOutlined />
                <span className="num">9.5</span>{" "}
              </span>{" "}
            </span>
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
              <Button type="primary">See movie details</Button>
            </div>
          </div>
        </div>
        {/* 电影信息 结束 */}
      </div>
      {/* 影院列表 开始 */}
      <div className="theaterList w">
        <div className="title">
          <span className="leftLine">————————————</span>
          <span>Theater List</span>
          <span className="rightLine">————————————</span>
        </div>
        <div className="body">
            {/* 单条影院 开始 */}
            <div className="theaterItem w">
                <div><span>xxx theater</span></div>
                <div><span className="address">香洲区南屏镇珠海大道3888号华发水岸商业街2层</span></div>
                <div><span>$41</span></div>
                <div><Button type="primary">Buy Ticket</Button></div>
            </div>
            {/* 单条影院 结束 */}
                        {/* 单条影院 开始 */}
                        <div className="theaterItem w">
                <div><span>xxx theater</span></div>
                <div><span className="address">香洲区南屏镇珠海大道3888号华发水岸商业街2层</span></div>
                <div><span>$41</span></div>
                <div><Button type="primary">Buy Ticket</Button></div>
            </div>
            {/* 单条影院 结束 */}
            
        </div>
      </div>
      {/* 影院列表 结束 */}
    </div>
  );
};

export default ChooseTheaterPage;
