import {BackTop, Empty, Menu, Tabs} from "antd";
import OrderHistoryDetail from "../features/orderHistoryDetail/OrderHistoryDetail";
import {SnippetsOutlined, UserOutlined} from "@ant-design/icons";
import PerfectScrollbar from "react-perfect-scrollbar";
import {useNavigate} from "react-router-dom";
import "./OrderHistory.less"
import {useState} from "react";

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
const data = [
    {
        id: 1,
        movieName: "流浪地球",
        theater: "中影国际影城",
        number: 3,
        price: "25.00",
        date: "2022-08-08 09:09",
        url: "https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg",
        orderId: 1234567890,
        orderStatus:3
    },
    {
        id: 2,
        movieName: "流浪地球",
        theater: "中影国际影城",
        number: 3,
        price: "25.00",
        date: "2022-08-08 09:09",
        url: "https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg",
        orderId: 1234567890,
        orderStatus:3
    }
];

const items = [
    // {
    //     label: "All orders",
    //     key: 1
    // },
    // {
    //     label: "To be payed",
    //     key: 2,
    // },
    {
        label: "To be used",
        key: 3,
    },
    // {
    //     label: "To be evaluated",
    //     key: 4,
    // }
];
const {TabPane} = Tabs;

const OrderHistory = () => {
    const [current, setCurrent] = useState(3);
    const navigate = useNavigate();
    const isEmpty = JSON.stringify(data) === '[]';
    const onChange = (event) => {
        setCurrent(event);
    }
    const handleMenuClick = ({key}) => {
        if(key === '/orderHistory'){
          navigate(`/orderHistory`);
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
                                        {
                                            data.filter((item) => (
                                                item.orderStatus === current
                                            )).map((item) => (
                                                <OrderHistoryDetail key={item.id} item={item}/>
                                            ))
                                        }
                                        <div>
                                            {isEmpty ? <Empty/> : ''}
                                        </div>
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
    )
}
export default OrderHistory;