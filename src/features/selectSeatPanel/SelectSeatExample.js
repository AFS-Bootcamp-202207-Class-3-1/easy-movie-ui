import {Col, Row} from "antd";
import "./SelectSeatExample.less";

const SelectSeatExample = () => {
  return (
    <div>
      <Row className="select-seat-example" gutter={30}>
        <Col span={8} className="select-seat-example-col">
          <img
            src="/seat/gray.png"
            className="select-seat-example-col-img"
            alt=""
          />
          <div className="select-seat-example-col-text">Available</div>
        </Col>
        <Col span={8} className="select-seat-example-col">
          <img
            src="/seat/green.png"
            className="select-seat-example-col-img"
            alt=""
          />
          <div className="select-seat-example-col-text">Selected</div>
        </Col>
        <Col span={8} className="select-seat-example-col">
          <img
            src="/seat/red.png"
            className="select-seat-example-col-img"
            alt=""
          />
          <div className="select-seat-example-col-text">Reserved</div>
        </Col>
      </Row>
    </div>
  );
};

export default SelectSeatExample;
