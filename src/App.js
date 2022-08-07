import "./App.less";
import PerfectScrollbar from "react-perfect-scrollbar";
import IndexHeader from "./layout/IndexHeader";
import IndexFooter from "./layout/IndexFooter";
import IndexPage from "./pages/IndexPage";
import MoviePage from "./pages/MoviePage";
import TheaterPage from "./pages/TheaterPage";
import { Layout } from "antd";
import { Route, Routes, Outlet } from "react-router-dom";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="app">
      <Layout>
        <Header className="header">
          <IndexHeader />
        </Header>
        <PerfectScrollbar className="main-content">
          <Content>
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route index element={<IndexPage />} />
                <Route path="/movie" element={<MoviePage />} />
                <Route path="/theater" element={<TheaterPage />} />
              </Route>
            </Routes>
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
