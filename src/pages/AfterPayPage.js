import { Steps, Card } from "antd";
import "./AfterPayPage.less";
import AfterPayDetail from "../features/afterPayDetail/AfterPayDetail";
import PerfectScrollbar from "react-perfect-scrollbar";

const { Step } = Steps;

const AfterPayPage = () => {
  return (
    <PerfectScrollbar id="app-main-scroller-bar">
      <div className="after-pay-page">
        <Card>
          <div className="after-pay-page-header">
            <Steps current={3}>
              <Step title="Select schedule" />
              <Step title="Select seat" />
              <Step title="Pay in 15 minutes" />
              <Step title="Take your ticket" />
            </Steps>
          </div>
          <div className="after-pay-page-content">
            <AfterPayDetail />
          </div>
        </Card>
      </div>
    </PerfectScrollbar>
  );
};

export default AfterPayPage;
