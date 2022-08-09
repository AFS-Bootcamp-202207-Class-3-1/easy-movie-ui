import { Table, Descriptions } from "antd";

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
  },
  {
    title: "Price/Yuan",
    dataIndex: "price",
    key: "price",
    render: (text) => <span>&yen; {text}</span>,
  },
];

const data = [
  {
    key: "1",
    schedule: "2022-08-08 20:48",
    movieName: "流浪地球",
    theater: "Coffee Studio",
    seat: "贵宾厅2",
    price: "55",
  },
];

const PrepareOrderDetail = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
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
