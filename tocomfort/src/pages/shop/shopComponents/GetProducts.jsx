import React from 'react';
import {Grid} from '@mui/material';
import styled from 'styled-components';
import ProductCard from '../../../components/ProductComponents/ProductCard';


const RowOfProducts = styled(Grid)`
    margin-top:20px;
`
function Product(props) {
    const products =[];
    for (let i = 0;i<props.data.length;i++){
        products.push(<ProductCard productID={props.data[i].id} key={i}/>)
    }
    return products;
  }



const GetProducts = (props) =>{
    let filteredProducts = props.filteredProducts.data;

    return(
        <RowOfProducts 
            container 
            columnSpacing={{ xs: 2, sm: 1, md: 1 }}
            direction="row"
            justifyContent="center"
            alignItems="flex-start">
                <Product data = {filteredProducts}/>
        </RowOfProducts>
    )

}
export default GetProducts;