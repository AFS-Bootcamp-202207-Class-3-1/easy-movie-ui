import "./AfterPayDetail.less";
import {Col, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {QRCodeSVG} from "qrcode.react";
import {
    CarryOutTwoTone,
    EnvironmentTwoTone,
    ProfileTwoTone,
    PropertySafetyTwoTone,
    VideoCameraTwoTone
} from "@ant-design/icons";

const data = {
    id: 1,
    movieName: "流浪地球",
    theater: "中影国际影城",
    seat: "五楼5号厅 2排1座 | 2排2座",
    number: 3,
    price: "25.00",
    date:"2022-08-08 09:09:09",
    orderTime:"2022-08-08 09:09:09",
    url: "https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg",
    orderId: 1234567890,
    qrcode:"123456",
};

const AfterPayDetail = () => {

    const navigate = useNavigate();

    const onClickCard = () => {
        navigate(`/movieDetail/${data.id}`);
    };

  return (
      <>
          <div className="after-pay-detail">
              <div className="after-pay-detail-movieTicket">电影票</div>
              <hr className="after-pay-detail-divider" />
              <div className="after-pay-detail-movieInfo">
                  <Row>
                      <Col span={12}>
                          <img alt={data.url} width="200px" className="after-pay-detail-movieInfo-image" src={data.url} onClick={onClickCard}/>
                      </Col>
                      <Col span={12}>
                          <div className="after-pay-detail-movieInfo-describe">
                              <div className="after-pay-detail-movieInfo-describe-content">
                                  <VideoCameraTwoTone twoToneColor="#FA541C" />&nbsp;
                                  <span>{data.movieName}</span>
                              </div>
                              <div className="after-pay-detail-movieInfo-describe-content">
                                  <CarryOutTwoTone twoToneColor="#FA541C" />&nbsp;
                                  <span>{data.date}</span>
                              </div>
                              <div className="after-pay-detail-movieInfo-describe-content">
                                  <EnvironmentTwoTone twoToneColor="#FA541C" />&nbsp;
                                  <span>{data.theater}</span>
                              </div>
                              <div className="after-pay-detail-movieInfo-describe-content">
                                  <ProfileTwoTone twoToneColor="#FA541C" />&nbsp;
                                  <span>&times; {data.number}</span>
                              </div>
                              <div className="after-pay-detail-movieInfo-describe-content">
                                  <PropertySafetyTwoTone twoToneColor="#FA541C" />&nbsp;
                                  <span>{data.price}</span>
                              </div>
                          </div>
                      </Col>
                  </Row>
              </div>
              <div className="after-pay-detail-movieTicket">取票</div>
              <hr className="after-pay-detail-divider" />
              <div className="after-pay-detail-qrcode">
                  <QRCodeSVG value={data.qrcode} />
              </div>
              <div className="after-pay-detail-movieTicket">订单号：{data.orderId}</div>
              <div className="after-pay-detail-movieTicket">验证码：{data.qrcode}</div>
              <div className="after-pay-detail-orderTime">下单时间：{data.orderTime}</div>
          </div>
      </>
  )
}
export default AfterPayDetail;