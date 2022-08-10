import "./SeatDetailCard.less";
import { Button, Divider } from "antd";
import SeatDetailCardItem from "./SeatDetailCardItem";

const SeatDetailCard = () => {
  return (
    <div className="seat-detail-card">
      <div className="seat-detail-card-movie">
        <img
          className="seat-detail-card-movie-img"
          src="https://p0.pipi.cn/mmdb/25bfd6d72c992367cb537c020675f703a7045.jpg?imageView2/1/w/464/h/644"
          alt=""
        ></img>
        <div className="seat-detail-card-movie-info">
          <div className="seat-detail-card-movie-info-title">电影名</div>
          <div className="seat-detail-card-movie-info-detail">
            <div>Type: XXX</div>
            <div>Duration: XXX</div>
          </div>
        </div>
      </div>
      <div className="seat-detail-card-others">
        <div className="seat-detail-card-others-theater">
          <span className="seat-detail-card-others-prefix">影院: </span>
          <span className="seat-detail-card-others-theater-name">
            CGV影城 (for test)
          </span>
        </div>
        <div className="seat-detail-card-others-schedule">
          <span className="seat-detail-card-others-prefix">场次: </span>
          <span className="seat-detail-card-others-schedule-name">
            XXX (for test)
          </span>
        </div>
        <div className="seat-detail-card-others-price">
          <span className="seat-detail-card-others-prefix">票价:</span>
          <span className="seat-detail-card-others-price-detail">
            ￥XXX (for test)
          </span>
        </div>
      </div>
      <Divider dashed></Divider>
      <div className="seat-detail-card-select">
        <div className="seat-detail-card-select-title">Selected Seats: </div>
        <SeatDetailCardItem />
        <SeatDetailCardItem />
        <SeatDetailCardItem />
        <SeatDetailCardItem />
        <SeatDetailCardItem />
        <SeatDetailCardItem />
        <SeatDetailCardItem />
        <SeatDetailCardItem />
      </div>
      <div className="seat-detail-card-total">
        <div className="seat-detail-card-total-title">Total Price: </div>
        <div className="seat-detail-card-total-price">xxx</div>
      </div>
      <Divider dashed></Divider>
      <div className="seat-detail-card-phone">Phone: 130xxxxxxxx</div>
      <div className="seat-detail-card-confirm">
        <Button className="seat-detail-card-confirm-button" type="primary">
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default SeatDetailCard;
