import React from 'react';
import {Stack,Box} from '@mui/material';
import ProductRow from './ProductRow';
import styled from 'styled-components';

const Wrapper = styled(Stack)`
    margin-top:50px;
    margin-left:10px;
    margin-bottom:50px;
`

const ProductTable = () =>{
    return(
        <Wrapper 
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ borderRadius: '10px' ,border: 1,borderColor: 'secondary.main',borderTop:0,borderBottom:0}}
        >
            <Box sx={{ textAlign: 'left', fontSize: 'h4.fontSize', borderBottom: 1}}>This is the title</Box>
            <ProductRow/>
            <ProductRow/>
        </Wrapper>
    )

}
export default ProductTable;