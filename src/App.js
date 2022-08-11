import { useEffect } from "react";
import { findUserById } from "./api/user";
import { getPurchasePointReq } from "./api/purchasePoint"
import { useDispatch } from "react-redux";

import "./App.less";
import IndexHeader from "./layout/IndexHeader";
import IndexFooter from "./layout/IndexFooter";
import IndexPage from "./pages/IndexPage";
import MoviePage from "./pages/MoviePage";
import TheaterPage from "./pages/TheaterPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import ChooseTheaterPage from "./pages/ChooseTheaterPage";
import TheaterPageDetail from "./pages/TheaterPageDetail";
import PersonalPage from "./pages/PersonalPage";
import { Layout } from "antd";
import { Route, Routes, Outlet } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import PrepareOrderPage from "./pages/PrepareOrderPage";
import AfterPayPage from "./pages/AfterPayPage";
import OrderHistory from "./pages/OrderHistory";
import AfterPayDetail from "./features/afterPayDetail/AfterPayDetail";
import { saveUserData } from "./features/userSlice";
import {  savePurchasePoint } from "./features/purchasePointSlice";
import SelectSeatPage from './pages/selectSeatPage/SelectSeatPage';
import OrderHistoryDetail from "./features/orderHistoryDetail/OrderHistoryDetail";


const { Header, Footer, Content } = Layout;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user !== null){
      user = JSON.parse(user);
      findUserById(user.id).then(res=>{
        dispatch(saveUserData(res));
        getPurchasePointReq(user.id).then(res=>{
          dispatch(savePurchasePoint(res.data.balance))
        })
      })
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Layout>
        <Header className="app-header">
          <IndexHeader />
        </Header>

          <Content className="app-main-content-wrapper">
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route index element={<IndexPage />} />
                <Route path="/movie/:query" element={<MoviePage />} />
                <Route path="/movie" element={<MoviePage />} />
                <Route path="/theater" element={<TheaterPage />} />
                <Route path="/theaterDetail/:theaterId/:movieId" element={<TheaterPageDetail />} />
                <Route path="/theaterDetail/:theaterId" element={<TheaterPageDetail />} />
                <Route path="/prepareOrder/:orderId" element={<PrepareOrderPage />} />
                <Route path="/afterPay/:orderId" element={<AfterPayPage />} />
                <Route path="/orderHistory/:orderId" element={<AfterPayDetail />} />
                <Route path="/orderHistory" element={<OrderHistory />} />
                <Route path="/orderHistoryDetail/:orderId" element={<OrderHistoryDetail />} />
                <Route path="/movieDetail/:id" element={<MovieDetailPage />} />
                <Route path="/chooseTheater/:id" element={<ChooseTheaterPage />} />
                <Route path="/personal" element={<PersonalPage />} />
                <Route path='/selectSeat/:orderId' element={<SelectSeatPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Content>

        <Footer className="app-footer">
          <IndexFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
