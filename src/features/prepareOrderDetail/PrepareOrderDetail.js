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
    movieName: "流浪地球",
    theater: "中影国际影城",
    seat: "五楼5号厅 2排1座 | 2排2座",
    price: "25",
  },
];

const PrepareOrderDetail = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <Descriptions
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
      </Descriptions>
    </div>
  );
};

export default PrepareOrderDetail;
