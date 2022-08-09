import { useEffect, useState } from "react";
import { Pagination, Empty } from "antd";
import { get } from "lodash";
import { getTheaterByPage } from "../api/theater";
import TheaterList from "../../src/features/theater/TheaterList.js";
import "./theaterPage.less";
const TheaterPage = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [total, setTotal] = useState(0);
  // const navigate = useNavigate();
  const [theaterList, setTheaterList] = useState([]);
  useEffect(() => {
    const params = {
      page: currentPage,
      pageSize: pageSize,
    };
    getTheaterByPage(params).then((response) => {
      setTotal(get(response, "data.totalElements"));
      setTheaterList(get(response, "data.content"));
      if (
        !get(response, "data.content") ||
        get(response, "data.content").length === 0
      ) {
        setIsEmpty(true);
        return;
      }
      setIsEmpty(false);
    });
  }, [currentPage, pageSize]);

  const onChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  return (
    <>
      <div className="imgDiv">
        <img className="imgDiv-img" src="assets/theater_imgs/live_bg.png" alt="assets/theater_imgs/live_bg.png"></img>
      </div>

      <div className="theaterListComponent">
        {isEmpty && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        {/* 影院列表 开始 */}

        {!isEmpty && <TheaterList theaterList={theaterList}></TheaterList>}
        {/* 影院列表 结束 */}
      </div>

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
    </>
  );
};

export default TheaterPage;
