import { BackTop, Empty, Menu, Tabs } from "antd";
import { SnippetsOutlined, UserOutlined } from "@ant-design/icons";
import PerfectScrollbar from "react-perfect-scrollbar";
import {useNavigate} from "react-router-dom";
import "./OrderHistory.less"
import {useEffect, useState} from "react";
import {getToBeEvaluatedOrderReq,getPaidOrdersByUseId} from "../api/order";
import OrderHistoryItem from "../features/orderHistoryItem/OrderHistoryItem";
import OrderHistoryToBeEvaluatedItem from "../features/orderHistoryItem/OrderHistoryToBeEvaluatedItem";
import moment from "moment";
import { useSelector } from "react-redux";

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
const items = [
  {
    label: "Paid",
    key: 3,
  },
  {
    label: "Used",
    key: 4,
  },
];
const { TabPane } = Tabs;

const OrderHistory = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userInfo);
  const onChange = () => {
  }
  const [orderDetail, setOrderDetail] = useState([]);
  const [orderToBeEvaluatedDetail, setOrderToBeEvaluatedDetail] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
        const {data} = await getPaidOrdersByUseId(user.id);
        let arr = data.reverse().map((item) => {
            const {schedule, movie, theater, order} = item;
            return {
              id: order.id,
              movieName: movie.name,
              theater: theater.name,
              number: order.seats.split("1").length - 1,
              price: order.totalPrice,
              date: moment(schedule.startTime).format("YYYY-MM-DD HH:mm"),
              url: movie.imageUrl
            };
          }
        )
        setOrderDetail(arr);
      }
       const fetchEvaluatedDetailData = async () =>{
        const {data} = await getToBeEvaluatedOrderReq(user.id);
        let arr = data.reverse().map((item) => {
            const {schedule, movie, theater, order} = item;
            return {
              id: order.id,
              movieName: movie.name,
              theater: theater.name,
              number: order.seats.split("1").length - 1,
              price: order.totalPrice,
              date: moment(schedule.startTime).format("YYYY-MM-DD HH:mm"),
              url: movie.imageUrl
            };
          }
        )
        setOrderToBeEvaluatedDetail(arr);
      }
      user.id && fetchData();
      user.id && fetchEvaluatedDetailData();
    }, [user.id]
  )
  const handleMenuClick = ({key}) => {
    if (key === '/personal') {
      navigate(`/personal`);
    }
  };
  return (
    <PerfectScrollbar id="app-main-scroller-bar">
      <div className="order-history">
        <div className="order-history-box w">
          <div className="order-history-box-left">
            <Menu
              onClick={handleMenuClick}
              selectedKeys="/myOrder"
              mode="inline"
              items={menuItems}
            />
          </div>
          <div className="order-history-box-right">
            <Tabs centered={true} defaultActiveKey="3" onChange={onChange}>
              {
                items.map((item) => (
                  <TabPane tab={item.label} key={item.key}>
                    {item.key === 3?
                      <>{orderDetail.map((item) => (
                        <OrderHistoryItem key={item.id} item={item}/>
                      ))}
                    <div>
                      {JSON.stringify(orderDetail) === '[]' ? <Empty/> : ''}
                    </div>
                      </>:<></>
                    }
                    {item.key === 4?
                      <>{orderToBeEvaluatedDetail.map((item) => (
                        <OrderHistoryToBeEvaluatedItem key={item.id} item={item}/>
                      ))}
                    <div>
                      {JSON.stringify(orderToBeEvaluatedDetail) === '[]' ? <Empty/> : ''}
                    </div>
                      </>:<></>
                    }
                  </TabPane>
                ))}
            </Tabs>
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
export default OrderHistory;
