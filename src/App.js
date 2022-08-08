import "./App.less";
import PerfectScrollbar from "react-perfect-scrollbar";
import IndexHeader from "./layout/IndexHeader";
import IndexFooter from "./layout/IndexFooter";
import IndexPage from "./pages/IndexPage";
import MoviePage from "./pages/MoviePage";
import TheaterPage from "./pages/TheaterPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import ChooseTheaterPage from "./pages/ChooseTheaterPage";
import { Layout, BackTop } from "antd";
import { Route, Routes, Outlet } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="app">
      <Layout>
        <Header className="header">
          <IndexHeader />
        </Header>

        <PerfectScrollbar className="main-content-wrapper" id="main-scroller-bar">
          <Content>
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route index element={<IndexPage />} />
                <Route path="/movie" element={<MoviePage />} />
                <Route path="/theater" element={<TheaterPage />} />
                <Route path="/movieDetail" element={<MovieDetailPage />} />
                <Route path="/chooseTheater" element={<ChooseTheaterPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
            <BackTop className="back-to-top" target={() => document.getElementById("main-scroller-bar")} />
          </Content>
        </PerfectScrollbar>

        <Footer className="footer">
          <IndexFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
