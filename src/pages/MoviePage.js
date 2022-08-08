import { useEffect, useState } from "react";
import { Pagination } from "antd";
import MovieGroup from "../features/movieList/MovieGroup";
import MovieMockList from "../features/movieList/MovieMockList";

import { get } from "lodash";

const MoviePage = () => {
  const [current, setCurrent] = useState(1);
  const [defaultPageSize, setDefaultPageSize] = useState(5);
  const [total, setTotal] = useState(0);

  const { content } = MovieMockList;

  const onChange = (page, pageSize) => {
    console.log("已经点击了");
    console.log("page", page);
    console.log("pageSize", pageSize);
  };
  const onShowSizeChange = (current, size) => {
    console.log("onShowSzieChange", current, size);
  };
  useEffect(() => {
    console.log("这里准备去获取API", MovieMockList, total);
    const current = get(MovieMockList, "pageable.pageNumber");
    console.log("current", current);
    setCurrent(current);
    setDefaultPageSize(get(MovieMockList, "pageable.pageSize"));
    setTotal(get(MovieMockList, "totalElements"));
  }, []);
  return (
    <div>
      <h1>Movie Page</h1>
      <MovieGroup movieList={content}></MovieGroup>
      <div style={{ textAlign: "center",marginTop:"68px",marginBottom:"30px" }}>
        <Pagination
          showQuickJumper
          defaultCurrent={current}
          onShowSizeChange={onShowSizeChange}
          defaultPageSize={defaultPageSize}
          total={total}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default MoviePage;
