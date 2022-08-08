import "./movieItem.css";
import { GlobalOutlined } from "@ant-design/icons";
import { Col, Row, Rate } from "antd";
import { get } from "lodash";
import { useNavigate } from "react-router-dom";
// import React from 'react';
const MovieItem = (props) => {
  const { item } = props;
  const navigate = useNavigate();
  const onClickImage = () => {
    const {id}=item;
    navigate(`/movieDetail/${id}`);
  };
  return (
    <>
      <div id="movieItem">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <img
              alt={get(item, "imageUrl")}
              onClick={onClickImage}
              className="MovieImg"
              src={get(item, "imageUrl")}
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
                {get(item, "name")}
                <br></br>
                <div
                  style={{
                    fontSize: "small",
                    fontWeight: "200",
                    fontFamily: "normal",
                  }}
                >
                  {get(item, "englishName")}
                </div>
              </div>
              <div style={{ fontSize: "large", color: "#FFB400" }}>
                {/* {get(item, "score")} */}
                <Rate
                  defaultValue={Number(get(item, "score"))}
                  disabled={false}
                />
              </div>
              <div>{get(item, "types").replaceAll(";", "  ")}</div>
              <div className="GlobalOutlinedDiv">
                <GlobalOutlined />
                {new Date(get(item, "releaseDate"))
                  .toLocaleDateString()
                  .split("")
                  .reverse()
                  .join("") + "  "}
                {get(item, "releaseCountry")}{" "}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MovieItem;
