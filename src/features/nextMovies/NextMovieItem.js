import { Card } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

const NextMovieItem = ({ movie }) => {
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
      <Meta title={movie.name} />
    </Card>
  );
};

export default NextMovieItem;
