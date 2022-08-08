import "./IndexPage.css"
import MovieCarousel from "../features/movieCarousel/MovieCarousel";
import Top100Movie from "../features/top100Movie/Top100Movie";

const Index = () => {
  return (
    <div className="index-page">
      <MovieCarousel className="movie-carousel-component"/>
      <div className="top-100-and-hot-movie">
        <Top100Movie />
      </div>
    </div>
  );
}

export default Index;