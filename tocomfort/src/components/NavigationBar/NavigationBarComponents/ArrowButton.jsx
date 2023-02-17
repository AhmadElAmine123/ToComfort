import React from 'react';
import styled from 'styled-components';
import {IconButton,Typography,Grid} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Wrapper = styled(Grid)`
    cursor:pointer;
    display:inline-block;
`;

const ArrowButton = (props) =>{
    return(
        <Wrapper
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
        >
        <Typography variant='span'>
            {props.children}
        </Typography>
            <ArrowDropDownIcon />
        </Wrapper>
    )

}
export default ArrowButton;