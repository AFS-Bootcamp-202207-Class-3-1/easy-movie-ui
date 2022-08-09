import "./IndexHeader.css";
import Navbar from "./Navbar";

import MovieSearchBar from "../features/movieSearchBar/MovieSearchBar";
import UserAvatar from "../features/userAvatar/UserAvatar";

const IndexHeader = () => {

  return (
    <div className="index-header">
      <img className="logo" src="/EasyMovie.png" alt="logo"></img>
      <Navbar className="navbar" />
      <MovieSearchBar></MovieSearchBar>
      <UserAvatar />
    </div>
  );
};

export default IndexHeader;
