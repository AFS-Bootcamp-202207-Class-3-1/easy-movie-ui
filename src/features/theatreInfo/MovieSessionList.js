import { Divider, Button, Space } from "antd";
import "../../pages/TheaterPage.css";
import "../../pages/sessionList.less";
import { useSelector } from "react-redux";
import "./MovieSessionList.less";
import { useEffect, useState } from "react";
import { groupBy, cloneDeep } from "lodash";
import moment from "moment";
import {useNavigate} from 'react-router-dom';

function MovieSessionList() {
  const sessionList = useSelector(
    (state) => state.theatreOnMovieClick.sessionList
  );

  const navigate = useNavigate();

  const sessionMap = groupBy(
    cloneDeep(sessionList).map((session) => {
      session.startDay = moment(session.startTime).format("MM-DD");
      session.startSchedule = moment(session.startTime).format("HH:mm");
      return session;
    }),
    "startDay"
  );

  let dayList = Object.keys(sessionMap || {});

  const [currentDay, setCurrentDay] = useState(dayList ? dayList[0] : "");

  const dayComponetList = dayList.map((day) => {
    return (
      <div
        key={day}
        onClick={() => setCurrentDay(day)}
        className="movie-session-list-day-item"
      >
        {day}
      </div>
    );
  });

  useEffect(() => {
    setCurrentDay(moment(sessionList[0]?.startTime).format("MM-DD"));
  }, [sessionList]);

  const toPrepareOrderPage = () => {
    navigate("/prepareOrder/1");
  }

  if (sessionList.length > 0) {
    return (
      <>
        <div className="movie-session-list fix-center-width">
          <Space
            split={
              <Divider
                type="vertical"
                className="movie-session-list-day-divider"
              />
            }
          >
            {dayComponetList}
          </Space>
        </div>
        {sessionMap[currentDay]?.map((item) => (
          <div className="movie-session-list-sessionItem fix-center-width" key={item.id}>
            <div>
              <span>{item.startSchedule}</span>
            </div>
            <div>
              <span className="movie-session-list-sessionItem-address">
                英语2D 贵宾厅2
              </span>
            </div>
            <div>
              <span>{item.price}￥</span>
            </div>
            <div>
              <Button type="primary" onClick={toPrepareOrderPage}>Buy Ticket</Button>
            </div>
          </div>
        ))}
      </>
    );
  } else {
    <div className="sessionItem fix-center-width">暂无放映场次</div>;
  }
}
export default MovieSessionList;
