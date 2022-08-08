import { useEffect, useState } from "react";
import { Pagination } from "antd";
import MovieGroup from "../features/movieList/MovieGroup";
import { useLocation } from "react-router-dom";
import { get, has } from "lodash";
import { fetchAllMovieList } from "../api/movie";
import MovieMockList from "../features/movieList/MovieMockList";
const MoviePage = () => {
  const [currentPage, setCurrentPage] = useState(1);//
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);
  const location = useLocation();
  const keyword = has(location, "state.keyWord") ? location.state.keyWord : null;
  console.log("keyword 有没有触发",keyword)
  const { content } = MovieMockList;
  const onChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize)
  };
  useEffect(() => {
    //拉去列表
    const params={
      page: currentPage,
      pageSize:pageSize,
      keyword:keyword
    }
    fetchAllMovieList(params).then(response=>{
      console.log("res",response);
    })
  }, [currentPage]);
  return (
    <div>
      {keyword && <span>返回电影列表</span>}
      <MovieGroup movieList={content}></MovieGroup>
      <div
        style={{ textAlign: "center", marginTop: "68px", marginBottom: "30px" }}
      >
        <Pagination
          total={100}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default MoviePage;
