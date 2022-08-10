import { Segmented } from "antd";
import "../../pages/TheaterPage.css";
import "../../pages/sessionList.less";
import { useSelector } from "react-redux";
import "./MovieSessionList.less";
import { useEffect, useState } from "react";
import { groupBy, cloneDeep } from "lodash";
import moment from "moment";
import MovieSessionItem from "./MoiveSessionItem";

function MovieSessionList() {
  const sessionList = useSelector(
    (state) => state.theatreOnMovieClick.sessionList
  );

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

  useEffect(() => {
    setCurrentDay(moment(sessionList[0]?.startTime).format("MM-DD"));
  }, [sessionList]);

  if (sessionList.length > 0) {
    return (
      <>
        <div className="movie-session-list fix-center-width">
          <Segmented
            className="fix-center-width"
            onChange={(day) => setCurrentDay(day)}
            block
            options={dayList}
          />
        </div>
        {sessionMap[currentDay]?.map((session) => (
          <MovieSessionItem key={session.id} session={session} />
        ))}
      </>
    );
  } else {
    <div className="sessionItem fix-center-width">暂无放映场次</div>;
  }
}
export default MovieSessionList;
