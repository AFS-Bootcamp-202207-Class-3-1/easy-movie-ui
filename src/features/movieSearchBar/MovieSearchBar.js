import "./MovieSearchBar.css";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const MovieSearchBar = () => {
  return (
    <div className="movie-search-bar">
      <Input className="search-input" placeholder="Enter the movie name" />
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
    </div>
  );
};

export default MovieSearchBar;
