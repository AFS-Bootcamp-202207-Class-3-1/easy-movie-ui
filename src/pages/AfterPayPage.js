
import {Steps, Card} from "antd";
import "./AfterPayPage.less";
import AfterPayDetail from "../features/afterPayDetail/AfterPayDetail";

const { Step } = Steps;

const AfterPayPage = () => {
    return (
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
    );
}

export default AfterPayPage;
