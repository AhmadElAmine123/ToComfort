import React from 'react';
import styled from 'styled-components';
import {Paper,Grid,Button} from '@mui/material';
import CouchImage from '../../../../couch.jpg';
import { PropaneSharp } from '@mui/icons-material';

const SliderImage = styled.img`
    width:100%;
    height:300px;
    @media (max-width: 768px) {
        height:150px;
    }
`

const MainImage = (props) =>{
    return(
        <Paper  sx={{ height: '100%',width:'50%' }} elevation={0}>
            <Grid
                 sx={{ height: '100%',width:'100%' }}
                container
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                >
                <SliderImage  src={props.src}/>
            </Grid>
        </Paper>

    )
}
export default MainImage;