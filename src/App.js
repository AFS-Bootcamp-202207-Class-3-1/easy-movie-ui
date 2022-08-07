import { useEffect } from "react";
import "./App.css";
import { findUserById } from "./api/user";

function App() {
  useEffect(() => {
    async function fetchData() {
      await findUserById(1);
    }
    let res = fetchData();
    console.log(res);
  }, []);

  return (
    <div className="app">
      <h1>We Are Coffee Studio.</h1>
    </div>
  );
}

export default App;
