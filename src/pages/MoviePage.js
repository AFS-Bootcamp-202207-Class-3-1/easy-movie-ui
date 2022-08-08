import { useEffect, useState } from "react";
import { Pagination, Empty } from "antd";
import MovieGroup from "../features/movieList/MovieGroup";
import { useNavigate,useLocation } from "react-router-dom";
import { get, has } from "lodash";
import { fetchAllMovieList } from "../api/movie";
import { RollbackOutlined } from "@ant-design/icons";
import { items } from "../layout/Navbar";
import "./moviePage.css";
const MoviePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [total, setTotal] = useState(0);
  const [keyword, setKeyword] = useState("");
  const location = useLocation();
  const [content, setContent] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const navigate=useNavigate();
  const onChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };
  useEffect(() => {
    //拉去列表
    setKeyword(has(location, "state.keyWord") ? location.state.keyWord : "");
    const params = {
      page: currentPage,
      pageSize: pageSize,
      keyword: keyword,
    };
    fetchAllMovieList(params).then((response) => {
      setTotal(get(response, "data.totalElements"));
      setContent(get(response, "data.content"));
      if (
        !get(response, "data.content") ||
        get(response, "data.content").length === 0
      ) {
        setIsEmpty(true);
        return;
      }
      setIsEmpty(false);
    });
  }, [currentPage, keyword, pageSize, location]);

  const returnMovieList=(event)=>{
        event.preventDefault();
        navigate(items[1].key)
  }
  return (
    <div>
      {keyword && (
        <div className="RollbackOutlinedDev">
          <RollbackOutlined />
          <a href ="/#"onClick={returnMovieList}>返回电影列表</a>
        </div>
      )}
      {isEmpty && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      {!isEmpty && <MovieGroup movieList={content}></MovieGroup>}
      <div
        style={{ textAlign: "center", marginTop: "68px", marginBottom: "30px" }}
      >
        <Pagination
          defaultCurrent={currentPage}
          total={total}
          defaultPageSize={pageSize}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default MoviePage;
