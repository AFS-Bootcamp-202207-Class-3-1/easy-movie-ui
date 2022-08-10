import { Steps, Card, BackTop, Row, Col } from "antd";
import "./SelectSeatPage.less";
import PerfectScrollbar from "react-perfect-scrollbar";
import SelectSeatPanel from "../../features/selectSeatPanel/SelectSeatPanel";

const { Step } = Steps;

const SelectSeatPage = () => {
  return (
    <PerfectScrollbar id="app-main-scroller-bar">
      <div className="select-seat-page">
        <Card>
          <div className="select-seat-page-header">
            <Steps current={1}>
              <Step title="Select schedule" />
              <Step title="Select seat" />
              <Step title="Pay in 15 minutes" />
              <Step title="Take your ticket" />
            </Steps>
          </div>
          <Row className="select-seat-page-body">
            <Col span={14}>
              <div className="select-seat-page-left">
                <SelectSeatPanel />
              </div>
            </Col>
            <Col span={10}>
              <div className="select-seat-page-right">2</div>
            </Col>
          </Row>
        </Card>
      </div>
      <BackTop
        className="app-back-to-top"
        target={() => document.getElementById("app-main-scroller-bar")}
      />
    </PerfectScrollbar>
  );
};

export default SelectSeatPage;
