import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, setSignedIn, setUserData } from '../../features/userSlice';
import BlogPage from '../BlogPage';
import Navbar from '../Navbar';
import './style.css'



const HomePage = () => {
    const dispatch = useDispatch();

    const login = (response)=>{
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj))
    };

    const isSignedIn = useSelector(selectSignedIn)

    return (
        <div className="home_page" style={{display:isSignedIn?"none":""}}>
           {!isSignedIn?<div className="login_message">
           <h2>📜</h2>
           <h1>Once You Learn To Read You Will Be Forever Free</h1>
            <p>
                A picture is worth a thousand words.This is more than just an
                overused phrase when it comes to website design
                </p>
                <GoogleLogin
                    clientId="758413146660-vlck9teaa5vbgiv608tmqrrdmp94ejvb.apps.googleusercontent.com"
                    render={(renderProps)=>(
                        <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className="login_button"
                            >
                            Login with Google

                        </button>
                    )}
                    onSuccess={login}
                    onFailure={login}
                    isSignedIn={true}
                    cookiePolicy={"single_host_origin"}
                    />
           </div> :""}
        </div>
    )
}

export default HomePage