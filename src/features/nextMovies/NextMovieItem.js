import { Card } from "antd";
const { Meta } = Card;

const NextMovieItem = ({ movie }) => {
  return (
    <Card hoverable cover={<img alt="example" src={movie.imageUrl} />}>
      <Meta title={movie.name} />
    </Card>
  );
};

export default NextMovieItem;
