import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const SignOut = () =>{
    let navigate = useNavigate();
    useEffect(()=>{
        sessionStorage.setItem("user",null)
        navigate('/')
    })
    

    return(
        <>
        </>
    )

}
export default SignOut;