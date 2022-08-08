import request from "./request";

const getTheaterDataReq = (movieId) => {
  return request.get("/theater/movie/" + movieId);
};

export { getTheaterDataReq };
