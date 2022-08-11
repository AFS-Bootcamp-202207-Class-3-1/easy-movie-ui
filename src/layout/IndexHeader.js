import "./IndexHeader.css";
import Navbar from "./Navbar";

import MovieSearchBar from "../features/movieSearchBar/MovieSearchBar";
import UserAvatar from "../features/userAvatar/UserAvatar";
import LoginUserAvatar from "../features/userAvatar/LoginUserAvatar";
import {useSelector} from "react-redux";

const IndexHeader = () => {
    const userInfo = useSelector(state => state.userInfo);
    const isUserExist = Object.keys(userInfo).length !== 0;
    return (
        <div className="index-header">
            <img className="logo" src="/EasyMovie.png" alt="logo"/>
            <Navbar className="navbar"/>
            <MovieSearchBar/>
            {
                isUserExist ? <UserAvatar/> : <LoginUserAvatar/>
            }
        </div>
    );
};

export default IndexHeader;
