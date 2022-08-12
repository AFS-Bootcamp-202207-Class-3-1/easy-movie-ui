import { Card, Rate } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const MovieItem = ({ movie }) => {
  const navigate = useNavigate();

  const onClickCard = () => {
    const { id } = movie;
    navigate(`/movieDetail/${id}`);
  };

  return (
    <Card
      hoverable
      onClick={onClickCard}
      cover={<img alt="example" src={movie.imageUrl} />}
    >
      <Meta
        title={movie.name}
        description={<Rate defaultValue={movie.score} disabled={true} />}
      />
    </Card>
  );
};

export default MovieItem;
