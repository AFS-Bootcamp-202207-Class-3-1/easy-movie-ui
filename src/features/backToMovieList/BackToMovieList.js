import './BackToMovieList.less'
import {
    RollbackOutlined
} from '@ant-design/icons'
import { NavLink, useNavigate } from 'react-router-dom'

const BackToMovieList = () =>{
    const navigate = useNavigate()

    const handleBackToList = () =>{
        navigate('./movie')
        console.log();
    }

    return(
        <div className="backToList w" >
        <NavLink to="/movie"><RollbackOutlined /><div>back To Movie list</div></NavLink>
        </div>
    )
}

export default BackToMovieList