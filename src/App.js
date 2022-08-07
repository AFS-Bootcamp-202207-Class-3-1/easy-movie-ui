import "./App.css";
import { Layout } from "antd";
import IndexHeader from "./layout/IndexHeader";
import IndexFooter from "./layout/IndexFooter";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="app">
      <Layout>
        <Header className="header">
          <IndexHeader />
        </Header>
        <Content className="main-content">Content</Content>
        <Footer className="footer">
          <IndexFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
