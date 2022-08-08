import request from "./request";

const getHotMovies = () => {
  return request.get("/movies/hot");
};

const getNextMovies = () => {
  return request.get("/movies/next");
};

const fetchAllMovieList=(params)=>{
  const {page,pageSize,keyword}=params;
  // eslint-disable-next-line
  return request.get("/movies"+"?page="+page+"&pageSize="+pageSize+"&keyword="+keyword);
}

export { getHotMovies, getNextMovies, fetchAllMovieList };
