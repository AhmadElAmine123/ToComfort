import React from 'react';
import styled from 'styled-components';
import {Paper,Grid,useTheme,Button} from '@mui/material';
import useIsUnderBreakPoint from '../../Hooks/useIsUnderBreakPoint';
import Description from './SliderItemComponents/Description';
import MainImage from './SliderItemComponents/MainImage';
import CouchImage from '../../../couch.jpg';

const Wrapper = styled(Paper)`
    height:100%;
    width:70%;
    opacity:1;
   

`;

const SliderItem = ({title,description,src}) =>{
    const theme = useTheme();
    const isUnderBreakPoint = useIsUnderBreakPoint();
    return(
    <Wrapper >
        <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ height: '100%'}}>
            <Description title = {title} description = {description}/>
            <MainImage src={src}/>
        </Grid>
    </Wrapper>
    )
}
export default SliderItem;