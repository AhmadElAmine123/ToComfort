import React from 'react';
import {Link, Typography} from '@mui/material';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Wrapper=styled(Typography)`
    cursor:pointer;
`

const Logo = () =>{
    
    let navigate = useNavigate();
    return(
        <Wrapper variant='h4'>
            <Link  onClick={() => navigate('/')} underline="none" color="navigationBar.text">ToComfort
            </Link>
        </Wrapper>
    )

}
export default Logo;