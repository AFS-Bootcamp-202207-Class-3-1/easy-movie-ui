import "../../pages/TheaterPage.css";
import TheatreOnMovieListItem from "./TheatreOnMovieListItem";

function TheatreOnMovieList(props) {
  const onMovieList = props.movieList.filter((item) => item.releaseStatus === 1);

  return (
    <>
      {onMovieList.map((item, index) => (
        <TheatreOnMovieListItem
          MovieId={item.id}
          imageUrl={item.imageUrl}
          key={index}
        ></TheatreOnMovieListItem>
      ))}
    </>
  );
}

export default TheatreOnMovieList;
