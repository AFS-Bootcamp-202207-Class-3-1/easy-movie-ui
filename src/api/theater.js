import request from "./request";

const getTheaterDataReq = (movieId) => {
  return request.get("/theater/movie/" + movieId);
};


const getTheaterByPage=(params)=>{
    const {page,pageSize}=params;
    return request.get(`/theater?page=${page}&pageSize=${pageSize}`);
}
export { getTheaterDataReq ,getTheaterByPage};
