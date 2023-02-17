import React from 'react';
import styled from 'styled-components';
import {Grid} from '@mui/material';


const Wrapper = styled(Grid)`
    border-style:solid;
`
const SideMenu = styled.div`
    background-color:grey;
`
const ProductsSearch = () =>{
    return(
        
        <Wrapper
        sx={{ borderColor: 'primary.main' }}
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        >
            <Grid item>fds</Grid>
            <Grid item>sdfs</Grid>
            <Grid item>sdfs</Grid>
            

            
        </Wrapper>
    )

}
export default ProductsSearch;