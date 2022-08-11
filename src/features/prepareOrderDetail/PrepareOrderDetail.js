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
          &yen; {text} &times; {ticketCount}
        </span>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={[orderDetail]} pagination={false} />
      {/* <Descriptions
        column={1}
        title={
          <div
            style={{
              textAlign: "left",
            }}
          >
            Additional Charges
          </div>
        }
      >
        <Descriptions.Item label="爆米花&times;2">&yen;25</Descriptions.Item>
        <Descriptions.Item label="可乐&times;2">&yen;20</Descriptions.Item>
      </Descriptions> */}
    </div>
  );
};

export default PrepareOrderDetail;
