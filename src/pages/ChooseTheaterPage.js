import { useNavigate, useParams } from "react-router-dom";
import { getTheaterDataReq } from "../api/theater";
import { getMovieDataReq } from "../api/movie";
import { Rate, Button } from "antd";
import { useEffect, useState } from "react";
import {
  DribbbleOutlined,
  FieldTimeOutlined,
  LineChartOutlined,
  FireOutlined,
} from "@ant-design/icons";

import "../layout/ChooseTheaterPage.less";

const ChooseTheaterPage = () => {
  const [data, setData] = useState({});
  const [theaterList, setTheaterList] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const onSeeDetailsClicked = () => {
    navigate("/movieDetail/" + id);
  };

  useEffect(() => {
    getMovieDataReq(id).then((res) => {
      setData(res.data);
    });
    getTheaterDataReq(id).then((res) => {
      setTheaterList(res.data);
    });
  }, [id]);

  return (
    <div className="ChooseTheaterPage">
      {/* 电影信息 开始 */}
      <div className="movieInfo w">
        <div className="left">
          <img src={data?.movie?.imageUrl} alt="" />
        </div>
        <div className="right">
          <span className="name_wrap">
            <span className="name">
              {data?.movie?.name}
              <span className="hot">
                <FireOutlined />
                <span className="num">9.5</span>{" "}
              </span>{" "}
            </span>
          </span>
          <div className="type">{data?.movie?.types}</div>
          <div className="time">
            <div className="date_country">
              <DribbbleOutlined />
              <span>
                {data?.movie?.releaseDate}
                {data?.movie?.releaseCountry}
              </span>
              <span className="runtime">
                <FieldTimeOutlined />
                <span>{data?.movie?.duration}分钟</span>
              </span>
            </div>
          </div>
          <span className="ticket">
            <LineChartOutlined />
            <span>$ {data?.movie?.boxOffice} </span>
          </span>
          <div className="score_wrap">
            <div className="totalScore score">
              <span className="num">{data?.movie?.score}</span>
              <Rate allowHalf disabled value={data?.movie?.score} />
              <p className="info">Total Score</p>
            </div>
            {/* <div className="userScore score">
              <span className="num">4.5</span>
              <Rate allowHalf disabled value={4.5} />
              <p className="info">My Score</p>
            </div> */}
            <div className="buy_btn">
              <Button type="primary" onClick={onSeeDetailsClicked}>
                See movie details
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* 电影信息 结束 */}
      {/* 影院列表 开始 */}
      <div className="theaterList w">
        <div className="title">
          <span className="leftLine">————————————</span>
          <span>Theater List</span>
          <span className="rightLine">————————————</span>
        </div>
        <div className="body">
          {theaterList?.map((theater) => {
            return (
              <div className="theaterItem w" key={theater.id}>
                <div>
                  <span>{theater.name}</span>
                </div>
                <div>
                  <span className="address">{theater.address}</span>
                </div>
                {/* <div>
              <span>$41</span>
            </div> */}
                <div>
                  <Button type="primary">Buy Ticket</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* 影院列表 结束 */}
    </div>
  );
};

export default ChooseTheaterPage;
