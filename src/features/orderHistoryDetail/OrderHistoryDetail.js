import {BackTop, Menu} from "antd";
import {
  SnippetsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {useNavigate, useParams} from "react-router-dom";
import "./OrderHistoryDetail.less"
import PerfectScrollbar from "react-perfect-scrollbar";
import AfterPayDetail from "../afterPayDetail/AfterPayDetail";

const menuItems = [
  {
    label: "Personal Information",
    key: "/personal",
    icon: <UserOutlined/>,
  },
  {
    label: "My Order",
    key: "/myOrder",
    icon: <SnippetsOutlined/>,
  },
];
const OrderHistoryDetail = () => {
  const navigate = useNavigate();
  const {orderId} = useParams();
  const handleMenuClick = ({key}) => {
    if(key === '/personal'){
      navigate(`/personal`);
    }
    if(key === '/myOrder'){
      navigate(`/orderHistory`);
    }
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
              <div style={{width: "600px"}}>
                <AfterPayDetail orderId={orderId} />
              </div>
            </div>
          </div>
        </div>
        <BackTop
            className="app-back-to-top"
            target={() => document.getElementById("app-main-scroller-bar")}
        />
      </PerfectScrollbar>
  );
}
export default OrderHistoryDetail;
