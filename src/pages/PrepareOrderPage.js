import { Steps, Card, Button, BackTop, message, Modal, Tag } from "antd";
import "./PrepareOrderPage.less";
import PrepareOrderDetail from "../features/prepareOrderDetail/PrepareOrderDetail";
import { useNavigate, useParams } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useEffect, useState } from "react";
import { getOrderById } from "../api/order";
import moment from "moment";
import { useSelector } from "react-redux";
import { payTheOrder } from "../api/order";
import { getUserLevel } from "../api/user";
import { getPurchasePointReq } from "../api/purchasePoint";

const { Step } = Steps;

const PrepareOrderPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [orderDetail, setOrderDetail] = useState({});
  const [points, setPoints] = useState(0);
  // const purchasePoint = useSelector((state) => state.purchasePoint.points);
  const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    async function fetchData() {
      const {data} = await getPurchasePointReq(userInfo.id);
      setPoints(data.balance);
    }
    if (userInfo.id) {
      fetchData();
    }
  }, [userInfo.id]);

  const showModal = () => {
    Modal.success({
      title: "VIP Rules",
      width: 500,
      content: (
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <p>
            <Tag color="magenta">1</Tag>
            When you have charged less than 200, your VIP level will be 0 and
            get no discount.
          </p>
          <p>
            <Tag color="red">2</Tag>
            When you have charged equal to or more than 200 and less than 500,
            your VIP level will be 1 and get 95% discount.
          </p>
          <p>
            <Tag color="volcano">3</Tag>
            When you have charged equal to or more than 500 and less than 800,
            your VIP level will be 2 and get 90% discount.
          </p>
          <p>
            <Tag color="orange">4</Tag>
            When you have charged equal to or more than 800, your VIP level will
            be 3 and get 85% discount.
          </p>
        </div>
      ),
      onOk() {},
    });
  };

  const goToAfterPayPage = async () => {
    try {
      await payTheOrder(orderId);
      message.success("Successfully paid");
      navigate(`/afterPay/${orderId}`);
    } catch (error) {
      message.error(error.errorMessage);
    }
  };

  const [userLevel, setUserLevel] = useState({});
  const [ticketCount, setTicketCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getUserLevel(userInfo.id);
      setUserLevel(data);
    }
    if (userInfo.id) {
      fetchData();
    }
  }, [userInfo.id]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getOrderById(orderId);
      const { schedule, movie, theater, order } = data;
      const seatsDetail = [];
      const splitSeats = order.seats.split("");
      splitSeats.forEach((seat, index) => {
        if (seat === "1") {
          seatsDetail.push(
            `${Math.floor(index / 6) + 1} row ${
              index - Math.floor(index / 6) * 6 + 1
            } seat `
          );
        }
      });
      setTicketCount(splitSeats.filter((seat) => seat === "1").length);

      setOrderDetail({
        key: "1",
        schedule: moment(schedule.startTime).format("YYYY-MM-DD HH:mm"),
        movieName: movie.name,
        theater: theater.name,
        seat: schedule.screenText,
        price: schedule.price,
        seatsDetail,
      });
    };
    fetchData();
  }, [orderId]);

  const totalPrice = orderDetail.price * ticketCount;
  const discountPrice = totalPrice * userLevel.discount;

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
            <PrepareOrderDetail
              orderDetail={orderDetail}
              ticketCount={ticketCount}
            />
          </div>
          <div className="prepare-order-page-remain-points">
            <div>
              Your remaining points :{" "}
              <span className="prepare-order-page-remain-points-under">
                $ {points?.toFixed(2)}
              </span>
            </div>
            <div>
              Your user level :{" "}
              <span className="prepare-order-page-remain-points-under">
                level {userLevel.level}
              </span>
            </div>
            <div>
              Your discount percent :{" "}
              <span className="prepare-order-page-remain-points-under">
                {parseInt((1 - userLevel.discount) * 100)}% off
              </span>
            </div>
            <div className="prepare-order-page-remain-points-rules">
              <Button onClick={showModal} type="link">
                Click to view more discount rules
              </Button>
            </div>
          </div>
          <div className="prepare-order-page-payment">
            <div className="prepare-order-page-payment-price">
              Total Price:
              <span className="prepare-order-page-payment-price-yen">
                $ {totalPrice.toFixed(2)}
              </span>
              <span className="prepare-order-page-payment-price-final">
                $ {discountPrice.toFixed(2)}
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
