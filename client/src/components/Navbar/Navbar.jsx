import React,{useEffect} from "react";
import { Link , useNavigate} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'

import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
// import Button from '../../components/Button/Button'
import './navbar.css'
import { setCurrentUser } from "../../Actions/currentUser";
import decode from 'jwt-decode'
const Navbar=()=> {
    const dispatch= useDispatch()
    var User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate();
    useEffect(()=>
    { 
        const token = User?.token 
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT'});
        navigate('/')
        dispatch(setCurrentUser(null))
    }
    return(
        
        <nav className='main_nav'>
            <div className='navbar'>
                <Link to='/' className='nav_item nav_logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <Link to='/' className='nav_item nav_btn'>About</Link>
                <Link to='/' className='nav_item nav_btn'>Products</Link>
                <Link to='/' className='nav_item nav_btn'>For Teams</Link>
                <form>
                    <input type="text" placeholder='Search...'/>
                    <img src={search} alt="search" width="18" className='search_icon'/>
                </form>
                { User === null ? 
                    <Link to='/Auth' className='nav_item nav_links'>Log in</Link> : 
                    <>
                         
                            {/* <Link to="/"><Avatar>M</Avatar></Link> */}
                            <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:'none'}}>{User?.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                            <button className='nav_item nav_links' onClick={handleLogout}>Log out</button>
                        
                           
                         
                        
                    </>
                }
            </div>
        
        </nav>
    )
}
export default Navbar