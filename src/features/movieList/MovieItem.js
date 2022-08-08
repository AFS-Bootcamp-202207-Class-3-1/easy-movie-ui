import "./movieItem.css";
import { Col, Row } from "antd";
import {get} from "lodash"

// import React from 'react';
const MovieItem = (props) => {
  const {item}=props;
  const onClickImage = (event) => {
    console.log("触发了点击图片的事件", event,"movieId为",get(item,"movie_id"));
  };
  return (
    <>
      <div id="movieItem">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <img
              onClick={onClickImage}
              className="MovieImg"
              src="imgs-movie/movieGirl.png"
            />
          </Col>
          <Col span={12}>
            <div className="movieReview">
              <div
                style={{
                  fontSize: "x-large",
                  fontWeight: "600",
                  fontFamily: "fantasy",
                }}
              >
                {get(item,"movie_name")}
              </div>
              <div style={{fontSize:"large",color:"#FFB400"}}>
                
                {get(item,"socre")}
                
                </div>
              <div>{get(item,"movie_types").replaceAll(";","  ")}</div>
              <div >上映日期 ：{get(item,"release_time")+"  "}{get(item,"release_national")} </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MovieItem;
