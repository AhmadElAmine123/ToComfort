import React from 'react';
import {Link} from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import CategoriesMenu from './ButtonWIthMenu/CategoriesMenu';


const StyledLink = styled(Link)`
    cursor:pointer;
`;
const Wrapper = styled.div`
padding-top:10px;

`
const MiddleSection =()=>{


    let navigate = useNavigate();

    


    return(
            <Wrapper>
                <StyledLink  underline="none" color="navigationBar.text" sx={{ margin: 1,p:0 }} onClick={() => navigate('/')}>Home</StyledLink>
                
                <StyledLink  underline="none" color="navigationBar.text" sx={{ margin: 1,p:0 }} >
                  <CategoriesMenu/>
                </StyledLink>
                <StyledLink  underline="none" color="navigationBar.text" sx={{ margin: 1,p:0 }}  onClick={() => navigate('/contactus')}>Contact Us</StyledLink>
                <StyledLink  underline="none" color="navigationBar.text" sx={{ margin: 1,p:0 }}  onClick={() => navigate('/about')}>About</StyledLink>
            </Wrapper>
    )

}
export default MiddleSection;