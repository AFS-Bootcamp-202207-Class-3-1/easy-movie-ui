import { Steps, Card, Button, BackTop, message } from "antd";
import "./PrepareOrderPage.less";
import PrepareOrderDetail from "../features/prepareOrderDetail/PrepareOrderDetail";
import { useNavigate, useParams } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useEffect, useState } from "react";
import { getOrderById } from "../api/order";
import moment from "moment";
import { useSelector } from "react-redux";
import { payTheOrder } from "../api/order";

const { Step } = Steps;

const PrepareOrderPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [orderDetail, setOrderDetail] = useState({});

  const goToAfterPayPage = async () => {
    try {
      await payTheOrder(orderId);
      message.success("Successfully paid");
      navigate(`/afterPay/${orderId}`);
    } catch (error) {
      message.error(error.errorMessage);
    }
  };

  const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getOrderById(orderId);
      const { schedule, movie, theater } = data;
      setOrderDetail({
        key: "1",
        schedule: moment(schedule.startTime).format("YYYY-MM-DD HH:mm"),
        movieName: movie.name,
        theater: theater.name,
        seat: schedule.screenText,
        price: schedule.price,
      });
    };
    fetchData();
  }, [orderId]);

  return (
    <PerfectScrollbar id="app-main-scroller-bar">
      <div className="prepare-order-page">
        <Card>
          <div className="prepare-order-page-header">
            <Steps current={2}>
              <Step title="Select schedule" />
              <Step title="Select seat" />
              <Step title="Pay in 15 minutes" />
              <Step title="Take your ticket" />
            </Steps>
          </div>
          <div className="prepare-order-page-content">
            <PrepareOrderDetail orderDetail={orderDetail} />
          </div>
          <div className="prepare-order-page-remain-points">
            Remaining points : <span>{userInfo.balance}</span>
          </div>
          <div className="prepare-order-page-payment">
            <div className="prepare-order-page-payment-price">
              total:
              <span className="prepare-order-page-payment-price-yen">
                &yen; {orderDetail.price}
              </span>
            </div>
            <Button type="primary" onClick={goToAfterPayPage}>
              Pay
            </Button>
          </div>
          <div className="prepare-order-page-help">
            Encounter payment difficulties?
          </div>
        </Card>
      </div>
      <BackTop
        className="app-back-to-top"
        target={() => document.getElementById("app-main-scroller-bar")}
      />
    </PerfectScrollbar>
  );
};

export default PrepareOrderPage;
