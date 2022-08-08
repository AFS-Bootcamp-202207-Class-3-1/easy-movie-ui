import "./App.less";
import PerfectScrollbar from "react-perfect-scrollbar";
import IndexHeader from "./layout/IndexHeader";
import IndexFooter from "./layout/IndexFooter";
import IndexPage from "./pages/IndexPage";
import MoviePage from "./pages/MoviePage";
import TheaterPage from "./pages/TheaterPage";
import { Layout, BackTop } from "antd";
import { Route, Routes, Outlet } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="app">
      <Layout>
        <Header className="app-header">
          <IndexHeader />
        </Header>

        <PerfectScrollbar className="app-main-content-wrapper" id="app-main-scroller-bar">
          <Content>
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route index element={<IndexPage />} />
                <Route path="/movie" element={<MoviePage />} />
                <Route path="/theater" element={<TheaterPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
            <BackTop className="app-back-to-top" target={() => document.getElementById("app-main-scroller-bar")} />
          </Content>
        </PerfectScrollbar>

        <Footer className="app-footer">
          <IndexFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
