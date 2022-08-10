import "./SeatDetailCard.less";
import { Button, Divider } from "antd";
import SeatDetailCardItem from "./SeatDetailCardItem";
import moment from "moment";
import { useSelector } from "react-redux";

const SeatDetailCard = ({ movie, theater, schedule, selectSeats }) => {
  const seatDetailCardItems = selectSeats.map((seat, index) => {
    if (seat === "2") {
      return (
        <SeatDetailCardItem
          key={index}
          row={Math.floor(index / 6) + 1}
          col={index - Math.floor(index / 6) * 6 + 1}
        />
      );
    } else {
      return null;
    }
  });

  const userInfo = useSelector((state) => state.userInfo);

  const count = selectSeats.filter((seat) => seat === "2").length;
  const totalPrice = count * schedule.price;

  return (
    <div className="seat-detail-card">
      <div className="seat-detail-card-movie">
        <img
          className="seat-detail-card-movie-img"
          src={movie.imageUrl}
          alt=""
        ></img>
        <div className="seat-detail-card-movie-info">
          <div className="seat-detail-card-movie-info-title">{movie.name}</div>
          <div className="seat-detail-card-movie-info-detail">
            <div>Types: {movie.types}</div>
            <div>Duration: {movie.duration} minutes</div>
          </div>
        </div>
      </div>
      <div className="seat-detail-card-others">
        <div className="seat-detail-card-others-theater">
          <span className="seat-detail-card-others-prefix">影院: </span>
          <span className="seat-detail-card-others-theater-name">
            {theater.name}
          </span>
        </div>
        <div className="seat-detail-card-others-schedule">
          <span className="seat-detail-card-others-prefix">场次: </span>
          <span className="seat-detail-card-others-schedule-name">
            {moment(schedule.startTime).format("YYYY-MM-DD HH:mm")}{" "}
            {schedule.screenText}
          </span>
        </div>
        <div className="seat-detail-card-others-price">
          <span className="seat-detail-card-others-prefix">票价: </span>
          <span className="seat-detail-card-others-price-detail">
            ￥{schedule.price}
          </span>
        </div>
      </div>
      <Divider dashed></Divider>
      <div className="seat-detail-card-select">
        <div className="seat-detail-card-select-title">Selected Seats: </div>
        {seatDetailCardItems}
      </div>
      <div className="seat-detail-card-total">
        <div className="seat-detail-card-total-title">Total Price: </div>
        <div className="seat-detail-card-total-price">&yen; {totalPrice}</div>
      </div>
      <Divider dashed></Divider>
      <div className="seat-detail-card-phone">
        Phone: {userInfo.phoneNumber}
      </div>
      <div className="seat-detail-card-confirm">
        <Button
          className="seat-detail-card-confirm-button"
          type="primary"
          disabled={count === 0}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default SeatDetailCard;
