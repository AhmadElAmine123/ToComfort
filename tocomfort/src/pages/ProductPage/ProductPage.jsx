import React from 'react';
import styled from 'styled-components';
import {Paper,Box,Grid,Typography,Button} from '@mui/material';
import { useLocation } from 'react-router-dom';
import LargeProductCard from '../../components/ProductComponents/LargeProductCard'

import {useParams} from 'react-router-dom';



const Wrapper = styled.div`
    height:500px;
`;


const ProductPage = () =>{
    
    const { Params } = useParams();
    const ID = useParams().productID
    

    return(
        <Wrapper>
            <LargeProductCard productID={ID}/>
        </Wrapper>
    )

}
export default ProductPage;