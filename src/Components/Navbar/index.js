import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectBlogData, selectSignedIn, selectUserData, setBlogData, setInput, setSignedIn } from '../../features/userSlice';
import {Avatar } from '@material-ui/core';
import  {GoogleLogout} from 'react-google-login';
import './style.css'
import BlogPage from '../BlogPage';
const Navbar = () => {
    const [inputValue,setInputValue] = useState("tech")
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);
    const dispatch = useDispatch();
    const logout = (response)=>{
        dispatch(setSignedIn(false))
        dispatch(userData(null));
        dispatch(setBlogData(null));
    }
    const handleClick =(e)=>{
        e.preventDefault()
        dispatch(setInput(inputValue))
    }
    return (
        <div className="navbar">
            <h1 className="navbar_header">
                BlogApp 💬
            </h1>
            {isSignedIn && (<div className="blog_search"><input className="search"
            placeholder="Search for blog"
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            ></input>
            <button
                className="submit"
                onClick={handleClick}
            >
                Search                
            </button>
            </div>)}
            {isSignedIn? <div className="navbar_user_data">
                <Avatar 
                className="user"
                    src={userData?.imageUrl}
                    alt={userData?.name}
                />
                <h1 className="signedIn">{userData?.givenName}</h1>
                <GoogleLogout
                     clientId="758413146660-vlck9teaa5vbgiv608tmqrrdmp94ejvb.apps.googleusercontent.com"
                     render={(renderProps)=>(
                        <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className="logout_button"
                            >
                            LogOut 
                        </button>
                    )}
                    onLogoutSuccess={logout}
                    // onSuccess = {login}
                    // onFailure = {login}
                    // isSignedIn={true}
                    // cookiePolicy={"single_host_origin"}
                    
                />
            </div>:<h1>Hello Guest 😀</h1>}
        </div>
    )
}

export default Navbar;
