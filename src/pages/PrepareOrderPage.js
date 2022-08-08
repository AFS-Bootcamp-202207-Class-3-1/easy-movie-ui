import { useParams } from "react-router-dom";
import { Steps, Card, Button } from "antd";
import "./PrepareOrderPage.less";
import PrepareOrderDetail from "../features/prepareOrderDetail/PrepareOrderDetail";

const { Step } = Steps;

const PrepareOrderPage = () => {
  const { orderId } = useParams();
  return (
    <div className="prepare-order-page">
      <Card>
        <div className="prepare-order-page-header">
          <Steps current={2}>
            <Step title="Select schedule" />
            <Step title="Select seat" />
            <Step title="Pay in 15 minutes" />
            <Step title="Take your ticket" />
          </Steps>
        </div>
        <div className="prepare-order-page-content">
          <PrepareOrderDetail />
        </div>
        <div className="prepare-order-page-remain-points">
          Remaining points : <span>10000.00</span>
        </div>
        <div className="prepare-order-page-payment">
          <div className="prepare-order-page-payment-price">
            total:
            <span className="prepare-order-page-payment-price-yen">
              &yen; 117
            </span>
          </div>
          <Button type="primary">Pay</Button>
        </div>
        <div className="prepare-order-page-help">
          Encounter payment difficulties?
        </div>
      </Card>
    </div>
  );
};

export default PrepareOrderPage;
