import { useEffect, useState } from "react";
import { Pagination, Empty, BackTop } from "antd";
import MovieGroup from "../features/movieList/MovieGroup";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { get } from "lodash";
import { fetchAllMovieList } from "../api/movie";
import { RollbackOutlined } from "@ant-design/icons";
import { items } from "../layout/Navbar";
import PerfectScrollbar from "react-perfect-scrollbar";
import "./moviePage.css";

const MoviePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [total, setTotal] = useState(0);
  const [keyword, setKeyword] = useState("");
  const location = useLocation();
  const [content, setContent] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const navigate = useNavigate();

  const onChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const query = useParams().query || "";

  useEffect(() => {
    //拉去列表
    setKeyword(query);
    const params = {
      page: currentPage,
      pageSize: pageSize,
      keyword: query,
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
  }, [currentPage, pageSize, location, query]);

  const returnMovieList = (event) => {
    event.preventDefault();
    navigate(items[1].key);
  };
  return (
    <PerfectScrollbar id="app-main-scroller-bar">
      <div>
        {keyword && (
          <div className="RollbackOutlinedDev">
            <RollbackOutlined />
            <a href="/#" onClick={returnMovieList}>
              Back To Movie List
            </a>
          </div>
        )}
        {isEmpty && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        {!isEmpty && <MovieGroup movieList={content}></MovieGroup>}
        <div
          style={{
            textAlign: "center",
            marginTop: "68px",
            marginBottom: "30px",
          }}
        >
          <Pagination
            current={currentPage}
            total={total}
            defaultPageSize={pageSize}
            onChange={onChange}
          />
        </div>
      </div>
      <BackTop
        className="app-back-to-top"
        target={() => document.getElementById("app-main-scroller-bar")}
      />
    </PerfectScrollbar>
  );
};

export default MoviePage;
