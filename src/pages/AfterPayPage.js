import { Steps, Card } from "antd";
import "./AfterPayPage.less";
import AfterPayDetail from "../features/afterPayDetail/AfterPayDetail";
import PerfectScrollbar from "react-perfect-scrollbar";
import {useParams} from "react-router-dom";

const { Step } = Steps;

const AfterPayPage = () => {
  const { orderId } = useParams();
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
            <AfterPayDetail orderId={orderId}/>
          </div>
        </Card>
      </div>
    </PerfectScrollbar>
  );
};

export default AfterPayPage;
