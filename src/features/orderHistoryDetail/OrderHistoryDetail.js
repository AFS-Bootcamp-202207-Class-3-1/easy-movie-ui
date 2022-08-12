import {
  SnippetsOutlined,
  UserOutlined,
  MinusCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { BackTop, Menu, Button, Modal, message } from "antd";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useNavigate, useParams } from "react-router-dom";
import AfterPayDetail from "../afterPayDetail/AfterPayDetail";
import "./OrderHistoryDetail.less";
import { refundOrder } from "../../api/order";
import { get } from "lodash";
import { useState } from "react";
const { confirm } = Modal;

const menuItems = [
  {
    label: "Personal Information",
    key: "/personal",
    icon: <UserOutlined />,
  },
  {
    label: "My Order",
    key: "/myOrder",
    icon: <SnippetsOutlined />,
  },
];
const OrderHistoryDetail = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [isUsed, setIsUsed] = useState(false);
  const handleMenuClick = ({ key }) => {
    if (key === "/personal") {
      navigate(`/personal`);
    }
    if (key === "/myOrder") {
      navigate(`/orderHistory`);
    }
  };
  const onclickRefund = () => {
    showPromiseConfirm();
  };

  const showPromiseConfirm = () => {
    confirm({
      title: "Do you want to refund?",
      icon: <ExclamationCircleOutlined />,
      content:
        "Once you click Refund, the bill's deduction will be returned to your balance, and this operation is not reversible",

      onOk() {
        return new Promise((resolve, reject) => {
          refundOrder(orderId)
            .then((response) => {
              if (get(response, "status") === "success") {
                resolve();
                return;
              }
              reject();
            })
            .catch(() => {
              //失败退款
              const key = "RefundFail";
              message
                .loading("Refunding...", 1.0)
                .then(() => message.error(key, 1.0))
                .then(() => reject())
                .then(() => navigate(`/orderHistory`));
            });
        })
          .then(() => {
            //成功退款
            const key = "RefundSuccess";
            message
              .loading("Refunding...", 1.0)
              .then(() => message.success(key, 1.0))
              .then(() => navigate(`/orderHistory`));
          })
          .catch(() => {});
      },
      onCancel() {},
    });
  };
  const callbackIsUsed = (isUsed) => {
    setIsUsed(isUsed);
  };
  return (
    <PerfectScrollbar id="app-main-scroller-bar">
      <div className="order-history-detail">
        <div className="order-history-detail-box w">
          <div className="order-history-detail-box-left">
            <Menu
              onClick={handleMenuClick}
              selectedKeys="/myOrder"
              mode="inline"
              items={menuItems}
            />
          </div>
          <div className="order-history-detail-box-right">
            <div style={{ width: "600px" }}>
              <AfterPayDetail
                orderId={orderId}
                callbackIsUsed={callbackIsUsed}
              />
            </div>
            {!isUsed && (
              <div className="order-history-detail-box-button">
                {/* <div>
                  <Button
                    className="order-history-detail-box-button-changeTime"
                    type="primary"
                    shape="round"
                    icon={<ClockCircleOutlined />}
                    size="large"
                  >
                    ChangeTime
                  </Button>
                </div> */}
                <div>
                  <Button
                    className="order-history-detail-box-button-refund"
                    type="primary"
                    shape="round"
                    icon={<MinusCircleOutlined />}
                    size="large"
                    onClick={onclickRefund}
                  >
                    Refund
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <BackTop
        className="app-back-to-top"
        target={() => document.getElementById("app-main-scroller-bar")}
      />
    </PerfectScrollbar>
  );
};
export default OrderHistoryDetail;
