import "./MovieSearchBar.css";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { get } from "lodash";
const MovieSearchBar = () => {

  const [keyWord,setKeyWord]=useState("");

  const onChangeKeyWord=(event)=>{
    const keyWordInput=get(event,"target.value");
    setKeyWord(keyWordInput);
  }
  const onClickSearch=(event)=>{
      

  }
  return (
    <div className="movie-search-bar">
      <Input className="search-input"  value={keyWord} onChange={onChangeKeyWord} placeholder="Enter the movie name" />
      <Button type="primary" onClick={onClickSearch} icon={<SearchOutlined />}>
        Search
      </Button>
    </div>
  );
};

export default MovieSearchBar;
