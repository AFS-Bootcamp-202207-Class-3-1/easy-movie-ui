import { GlobalOutlined, HistoryOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import moment from "moment";
import "./ChooseMovieInfo.less";

function ChooseMovieInfo(props) {
  const movieItemClickId = useSelector(
    (state) => state.theatreOnMovieClick.choosedMovieId
  );

  const chooseMovie = props.movieList.find(
    (item) => item.id === parseInt(movieItemClickId)
  );

  if (chooseMovie) {
    const { name, types, releaseDate, releaseCountry, duration } = chooseMovie;
    const formatReleaseDate = moment(releaseDate).format("YYYY-MM-DD");
    return (
      <>
        <div className="choose-movie-info-name">{name}</div>
        <div>{types}</div>
        <div>
          <GlobalOutlined /> &ensp;{formatReleaseDate} {releaseCountry}
          &ensp;&ensp;&ensp;&ensp;
          <HistoryOutlined />
          &ensp;{duration} Minutes
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export default ChooseMovieInfo;
