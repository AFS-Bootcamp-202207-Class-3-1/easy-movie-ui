import { Card, Rate } from "antd";
const { Meta } = Card;

const MovieItem = ({ movie }) => {
  return (
    <Card hoverable cover={<img alt="example" src={movie.imageUrl} />}>
      <Meta
        title={movie.name}
        description={<Rate defaultValue={5} disabled={true} />}
      />
    </Card>
  );
};

export default MovieItem;
