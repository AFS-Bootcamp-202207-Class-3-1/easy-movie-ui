import { Checkbox, Col, Row, Divider } from "antd";
import SelectSeatExample from "./SelectSeatExample";
import SelectSeatItem from "./SelectSeatItem";
import "./SelectSeatPanel.less";

const SelectSeatPanel = ({ initSeats, changeSeats }) => {
  const checkboxGroup = initSeats.map((seat, index) => {
    return (
      <Col span={4} key={index}>
        <SelectSeatItem
          index={index}
          initStatus={seat}
          setCurrentStatus={changeSeats}
        />
      </Col>
    );
  });

  return (
    <div className="select-seat-panel">
      <SelectSeatExample className="select-seat-panel-example" />
      <div className="select-seat-panel-divider">
        <Divider />
      </div>
      <div className="select-seat-panel-screen">
        <div className="select-seat-panel-screen-front"></div>
        <div className="select-seat-panel-screen-back"></div>
        <div className="select-seat-panel-screen-text">
          Center of the screen
        </div>
      </div>
      <Checkbox.Group className="select-seat-panel-table">
        <Row gutter={[20, 20]}>{checkboxGroup}</Row>
      </Checkbox.Group>
    </div>
  );
};

export default SelectSeatPanel;
