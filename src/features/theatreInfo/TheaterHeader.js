import { EnvironmentFilled, PhoneFilled } from "@ant-design/icons";
import { Divider } from "antd";
import "./TheaterHeader.less";

const TheaterHeader = ({ theater }) => {
  return (
    <div className="theater-info-header">
      <div className="theater-info-header-banner">
        <div className="theater-info-header-banner-box">
          <div className="theater-info-header-banner-box-left">
            <div className="theater-info-header-banner-box-left-avatar-shadow">
              <img src={theater.imageUrl} alt="theater"></img>
            </div>
          </div>
          <div className="theater-info-header-banner-box-main">
            <div className="theater-info-header-banner-box-main-brief-container">
              <h1 className="theater-info-header-banner-box-main-brief-container-name">
                {theater.name}
              </h1>
              <div className="theater-info-header-banner-box-main-brief-container-address">
                <EnvironmentFilled /> {theater.address}
              </div>
              <div className="theater-info-header-banner-box-main-brief-container-telephone">
                <PhoneFilled /> {theater.phoneNumber}
              </div>
              <div className="theater-info-header-banner-box-main-brief-container-group">
                <div className="theater-info-header-banner-box-main-brief-container-group-title"></div>
                <div className="theater-info-header-banner-box-main-brief-container-group-img">
                  <img src={"/TheaterPage_img/vip.png"} width={160} alt="vip"></img>
                  <Divider type="vertical" />
                  <img
                    src={"/TheaterPage_img/parkinglot.png"}
                    width={160}
                    alt="parkinglot"
                  ></img>
                  <Divider type="vertical" />
                  <img
                    src={"/TheaterPage_img/Recommended discount.png"}
                    width={160}
                    alt="Recommended discount"
                  ></img>
                  <Divider type="vertical" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheaterHeader;
