import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const MovieSessionItem = ({ session }) => {
  const navigate = useNavigate();

  const toPrepareOrderPage = () => {
    navigate("/prepareOrder/1");
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
