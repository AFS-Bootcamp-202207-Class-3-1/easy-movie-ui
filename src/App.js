
import {useEffect } from 'react'
import {findUserById} from './api/user'
import {useDispatch} from 'react-redux'

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
import{saveUserData} from './features/userSlice'
const { Header, Footer, Content } = Layout;


function App() {

// *****假登录，完成登录功能后删除*****
const dispatch = useDispatch();
useEffect(() => {
    findUserById(1).then((res)=>{
      dispatch(saveUserData(res))
    })
}, [])
// **********************************

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
                <Route path="/movie" element={<MoviePage />} />
                <Route path="/theater" element={<TheaterPage />} />
                <Route path="/theaterDetail/:theaterId/:movieId" element={<TheaterPageDetail />} />
                <Route path="/theaterDetail/:theaterId" element={<TheaterPageDetail />} />
                <Route path="/prepareOrder/:orderId" element={<PrepareOrderPage />} />
                <Route path="/afterPay/:orderId" element={<AfterPayPage />} />
                <Route path="/movieDetail/:id" element={<MovieDetailPage />} />
                <Route path="/chooseTheater/:id" element={<ChooseTheaterPage />} />
                <Route path="/personal" element={<PersonalPage />} />
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
