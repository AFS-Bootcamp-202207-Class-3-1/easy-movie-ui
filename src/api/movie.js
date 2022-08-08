import request from "./request";

const getMovieDataReq = (id) => {
  return request.get("/movies/" + id);
};

export { getMovieDataReq };
