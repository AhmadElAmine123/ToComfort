import React from 'react';
import styled from 'styled-components';
import {Link,useTheme,Grid} from '@mui/material';

const Wrapper = styled(Grid)`
    background-color:${props => props.color};
    width:100%;
`
const Footer = () =>{
    const theme = useTheme();
    return (
    <Wrapper 
    color={theme.palette.primary.dark}
    container direction="row"
     justifyContent="flex-start" 
     alignItems="center"
     sx={{mb:0,heigh:30}}  >
            <Link  href="#" underline="none"  color="navigationBar.text" sx={{ margin: 2, mb:0}}>whatver</Link>
            <Link  href="#" underline="none"  color="navigationBar.text" sx={{ margin: 2, mb:0}} >whatver</Link>
            <Link  href="#" underline="none"  color="navigationBar.text" sx={{ margin: 2, mb:0}}>whatver</Link>
    </Wrapper>

    );

}
export default Footer;