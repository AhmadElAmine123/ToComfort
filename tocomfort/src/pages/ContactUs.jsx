import React from 'react';
import styled from 'styled-components';
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';
import {Link,useTheme,Grid} from '@mui/material';


const Wrapper = styled(Grid)`
    margin-top:100px;
    margin-bottom:100px;
    margin-right:5%;
    margin-left:5%;
    border-style:solid;
`
const SideMenu = styled.div`
`
const ContactUs = () => {

    const theme = useTheme();
    return(
        <Wrapper sx={{ borderColor: 'primary.main' }}>
            
        </Wrapper>
    )

}
export default ContactUs;