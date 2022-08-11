import { Steps, Card, Button, BackTop, message, Modal } from "antd";
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

const { Step } = Steps;

const PrepareOrderPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [orderDetail, setOrderDetail] = useState({});
  const purchasePoint = useSelector((state) => state.purchasePoint);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    Modal.success({
      title: "VIP Rules",
      width: 600,
      content: (
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <p>
            When user has prepay 200&lt;= <span>VIP Level</span> &lt;500, then
            define his/her VIP level as 1;
          </p>
          <p>
            When user has prepay 500&lt;= <span>VIP Level</span> &lt;800, then
            define his/her VIP level as 2;
          </p>
          <p>
            When user has prepay 800&lt;= <span>VIP Level</span> , then define
            his/her VIP level as 3;
          </p>
        </div>
      ),
      onOk() {},
    });
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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

  const userInfo = useSelector((state) => state.userInfo);
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
            `${Math.floor(index / 6) + 1}排${
              index - Math.floor(index / 6) * 6 + 1
            }座`
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
                $ {purchasePoint.toFixed(2)}
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
                &yen; {totalPrice.toFixed(2)}
              </span>
              <span className="prepare-order-page-payment-price-final">
                &yen; {discountPrice.toFixed(2)}
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
      <Modal
        title="VIP Rules"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
      >
        <p>
          When user has prepay 200&lt;= <span>VIP Level</span> &lt;500, then
          define his/her VIP level as 1;
        </p>
        <p>
          When user has prepay 500&lt;= <span>VIP Level</span> &lt;800, then
          define his/her VIP level as 2;
        </p>
        <p>
          When user has prepay 800&lt;= <span>VIP Level</span> , then define
          his/her VIP level as 3;
        </p>
      </Modal>
      <BackTop
        className="app-back-to-top"
        target={() => document.getElementById("app-main-scroller-bar")}
      />
    </PerfectScrollbar>
  );
};

export default PrepareOrderPage;
