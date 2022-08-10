import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../api/order";
import { useSelector } from "react-redux";

const MovieSessionItem = ({ session }) => {
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);
  const toPrepareOrderPage = async () => {
    const { data } = await createOrder({
      userId: userInfo.id,
      scheduleId: session.id,
      movieId: session.movieId,
      theaterId: session.theaterId,
    });
    navigate(`/prepareOrder/${data.id}`);
  };

  return (
    <div
      className="movie-session-list-sessionItem fix-center-width"
      key={session.id}
    >
      <div>
        <span>{session.startSchedule}</span>
      </div>
      <div>
        <span className="movie-session-list-sessionItem-address">
          {session.screenText}
        </span>
      </div>
      <div>
        <span>{session.price}￥</span>
      </div>
      <div>
        <Button type="primary" onClick={toPrepareOrderPage}>
          Buy Ticket
        </Button>
      </div>
    </div>
  );
};

export default MovieSessionItem;
