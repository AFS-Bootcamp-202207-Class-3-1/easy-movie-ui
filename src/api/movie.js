import request from "./request";

const getHotMovies = () => {
  return request.get("/movies/hot");
};

const getNextMovies = () => {
  return request.get("/movies/next");
};

const fetchAllMovieList = (params) => {
  const { page, pageSize, keyword } = params;

  return request.get(
    `/movies?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
  );
};

const getMovieDataReq = (id) => {
  return request.get("/movies/" + id);
};

export { getHotMovies, getNextMovies, fetchAllMovieList, getMovieDataReq };
