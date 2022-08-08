import "./IndexPage.css"
import MovieCarousel from "../features/movieCarousel/MovieCarousel";

const Index = () => {
  return (
    <div className="index-page">
      <MovieCarousel className="movie-carousel-component"/>
    </div>
  );
}

export default Index;