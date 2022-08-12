import { Table } from "antd";
import "./PrepareOrderDetail.less";

const PrepareOrderDetail = ({ orderDetail, ticketCount }) => {
  const columns = [
    {
      title: "Movie Name",
      dataIndex: "movieName",
      key: "movieName",
    },
    {
      title: "Schedule",
      dataIndex: "schedule",
      key: "schedule",
    },
    {
      title: "Theater",
      dataIndex: "theater",
      key: "theater",
    },
    {
      title: "Seat",
      dataIndex: "seat",
      key: "seat",
      render: (_, { seat }) => (
        <div>
          <div>{seat}</div>
          <div className="prepare-order-detail-seat">
            {orderDetail?.seatsDetail?.join(" | ")}
          </div>
        </div>
      ),
    },
    {
      title: "Price/Yuan",
      dataIndex: "price",
      key: "price",
      render: (text) => (
        <span>
          $ {text} &times; {ticketCount}
        </span>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={[orderDetail]} pagination={false} />
    </div>
  );
};

export default PrepareOrderDetail;
