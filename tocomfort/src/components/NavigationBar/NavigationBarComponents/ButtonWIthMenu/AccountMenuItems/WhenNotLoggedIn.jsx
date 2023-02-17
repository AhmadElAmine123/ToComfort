import React from 'react';
import {MenuItem} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const WhenNotLoggedIn = () =>{
    let navigate = useNavigate();
    return(
        <>
        <MenuItem onClick = {()=>navigate('/signIn')}>Sign in</MenuItem>
        <MenuItem onClick = {()=>navigate('/signUp')}>Sign up</MenuItem>
        </>
    )
}
export default WhenNotLoggedIn;