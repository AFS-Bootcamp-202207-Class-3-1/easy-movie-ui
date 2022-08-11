import "./IndexHeader.css";
import Navbar from "./Navbar";

import MovieSearchBar from "../features/movieSearchBar/MovieSearchBar";
import UserAvatar from "../features/userAvatar/UserAvatar";
import { useNavigate } from "react-router-dom";

const IndexHeader = () => {
  const navigate = useNavigate();

  const toIndex = () => {
    navigate("/");
  }

  return (
    <div className="index-header">
      <img onClick={toIndex} className="logo" src="/EasyMovie.png" alt="logo"></img>
      <Navbar className="navbar" />
      <MovieSearchBar></MovieSearchBar>
      <UserAvatar />
    </div>
  );
};

export default IndexHeader;
