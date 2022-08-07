import "./App.css";
import { Layout } from "antd";
import Navbar from "./layout/Navbar";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="app">
      <Layout>
        <Header className="header">
          <Navbar />
        </Header>
        <Content className="main-content">Content</Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
