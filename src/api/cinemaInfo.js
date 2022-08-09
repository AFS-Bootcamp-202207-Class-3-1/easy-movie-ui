import request from "./request";

const getCinemaInfoById = (cinemaId) => {
  return request.get("/theater/" + cinemaId);
};

const getSessionInfoById = (cinemaId, movieId) => {
  return request.get("/schedule?theaterId=" + cinemaId + "&movieId=" + movieId);
};

export { getCinemaInfoById, getSessionInfoById };
