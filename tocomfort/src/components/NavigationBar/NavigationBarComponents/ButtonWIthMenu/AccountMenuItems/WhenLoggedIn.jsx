import React from 'react';
import {MenuItem} from '@mui/material';
import {useNavigate,useEffect} from 'react-router-dom';

const WhenLoggedIn = () =>{
    let navigate =useNavigate();
    function SigningOut(){
        sessionStorage.setItem("user",null);
        
    window.location.reload(false);
        navigate('/')

    }

    return(
        <>
        <MenuItem onClick={()=>{navigate('/profile')}}>Profile</MenuItem>
        <MenuItem onClick={()=>{navigate('/purchases')}}>My Purchases</MenuItem>
        <MenuItem onClick={SigningOut}>SignOut</MenuItem>

        </>
    )

}
export default WhenLoggedIn;