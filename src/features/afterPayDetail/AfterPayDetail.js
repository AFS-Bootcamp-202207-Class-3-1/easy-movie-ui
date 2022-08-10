import "./AfterPayDetail.less";
import {useNavigate, useParams} from "react-router-dom";
import {QRCodeSVG} from "qrcode.react";
import {
    AppstoreTwoTone,
    CarryOutTwoTone,
    EnvironmentTwoTone,
    ProfileTwoTone,
    PropertySafetyTwoTone,
    VideoCameraTwoTone
} from "@ant-design/icons";
import {getOrderById} from "../../api/order";
import {useEffect, useState} from "react";
import moment from "moment";


const AfterPayDetail = (props) => {
    const navigate = useNavigate();
    const {orderId} = useParams() || props.orderId;

    const [orderDetail, setOrderDetail] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getOrderById(orderId);
            const { schedule, movie, theater,order } = data;
            console.log(data)
            setOrderDetail({
                key: "1",
                orderId: order.id,
                imageUrl: movie.imageUrl,
                schedule: moment(schedule.startTime).format("YYYY-MM-DD HH:mm"),
                movieName: movie.name,
                theater: theater.name,
                votes: order.votes,
                seat: schedule.screenText,
                price: schedule.price,
                qrCode:order.quickMarkKey,
                createTime: moment(order.createTime).format("YYYY-MM-DD HH:mm:ss")
            });

        }
        fetchData();
    },[orderId]);
    const onClickCard = () => {
        navigate(`/movieDetail/${orderDetail.orderId}`);
    };

  return (
      <>
          <div className="after-pay-detail">
              <div className="after-pay-detail-movieTicket">电影票</div>
              <hr className="after-pay-detail-divider" />
              <div className="after-pay-detail-movieInfo">
                          <img alt="" width="200px" className="after-pay-detail-movieInfo-image" src={orderDetail.imageUrl} onClick={onClickCard}/>
                          <div className="after-pay-detail-movieInfo-describe">
                              <div className="after-pay-detail-movieInfo-describe-content">
                                  <VideoCameraTwoTone twoToneColor="#FA541C" />&nbsp;&nbsp;
                                  <span>{orderDetail.movieName}</span>
                              </div>
                              <div className="after-pay-detail-movieInfo-describe-content">
                                  <CarryOutTwoTone twoToneColor="#FA541C" />&nbsp;&nbsp;
                                  <span>{orderDetail.schedule}</span>
                              </div>
                              <div className="after-pay-detail-movieInfo-describe-content">
                                  <EnvironmentTwoTone twoToneColor="#FA541C" />&nbsp;&nbsp;
                                  <span>{orderDetail.theater}</span>
                              </div>
                              <div className="after-pay-detail-movieInfo-describe-content">
                                  <ProfileTwoTone twoToneColor="#FA541C" />&nbsp;&nbsp;
                                  <span>&times; {orderDetail.votes}</span>
                              </div>
                              <div className="after-pay-detail-movieInfo-describe-content">
                                  <AppstoreTwoTone twoToneColor="#FA541C" />&nbsp;&nbsp;
                                  <span>{orderDetail.seat}</span>
                              </div>
                              <div className="after-pay-detail-movieInfo-describe-content">
                                  <PropertySafetyTwoTone twoToneColor="#FA541C" />&nbsp;&nbsp;
                                  <span>{orderDetail.price}</span>
                              </div>
                          </div>
              </div>
              <div className="after-pay-detail-movieTicket">取票</div>
              <hr className="after-pay-detail-divider" />
              <div className="after-pay-detail-qrcode">
                  <QRCodeSVG value={orderDetail.qrCode} />
              </div>
              <div className="after-pay-detail-movieTicket">订单号：{orderDetail.orderId}</div>
              <div className="after-pay-detail-movieTicket">验证码：{orderDetail.qrCode}</div>
              <div className="after-pay-detail-orderTime">下单时间：{orderDetail.createTime}</div>
          </div>
      </>
  )
}
export default AfterPayDetail;