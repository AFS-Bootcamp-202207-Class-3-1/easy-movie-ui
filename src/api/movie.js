import request from "./request";

const getHotMovies = () => {
  return request.get("/movies/hot");
};

const getNextMovies = () => {
  return request.get("/movies/next");
};

export { getHotMovies, getNextMovies };
