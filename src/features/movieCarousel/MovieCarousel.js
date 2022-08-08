import { Carousel, Image } from "antd";
import "./MovieCarousel.css";

const MovieCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const images = [
    "assets/25bfd6022ffddd16bdf2aa147266fd108469a.jpg",
    "assets/531b7d1311fcb84b463e313bd92fc843.jpg",
    "assets/0545051acc163ad52837af890740187c.jpg",
    "assets/d8c8bd6f6d946d9452460f39bd5af3d5.jpg",
  ];

  const imageList = images.map((image) => {
    return (
      <div key={image} className="movie-carousel-item">
        <Image
          className="image"
          preview={false}
          width={1200}
          height={300}
          src={image}
        />
      </div>
    );
  });

  return (
    <Carousel className="movie-carousel" afterChange={onChange}>
      {imageList}
    </Carousel>
  );
};

export default MovieCarousel;
