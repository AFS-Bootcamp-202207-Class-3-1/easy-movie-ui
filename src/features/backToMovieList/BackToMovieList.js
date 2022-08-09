import './BackToMovieList.less'
import {
    RollbackOutlined
} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

const BackToMovieList = () =>{


    return(
        <div className="backToList w" >
        <NavLink to="/movie"><RollbackOutlined /><div>Back To Movie List</div></NavLink>
        </div>
    )
}

export default BackToMovieList