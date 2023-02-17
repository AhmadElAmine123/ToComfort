import React from 'react';
import useApi from '../../Hooks/useApi';
import {Grid} from '@mui/material';
import styled from 'styled-components';
import ProductCard from '../../ProductComponents/ProductCard';


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



const GetBestSellersProducts = (props) =>{
    const bestSellers = useApi('http://localhost:5000/best_sellers_from_category/p/'+props.categoryID)
    let bestSellersData = bestSellers.data;

    return(
        <RowOfProducts 
            container 
            columnSpacing={{ xs: 2, sm: 1, md: 1 }}
            direction="row"
            justifyContent="center"
            alignItems="flex-start">
                {(bestSellers.success === false) ? (
            <>
            
            </>

                ):(
                    <> 
                    <Product data = {bestSellersData}/>
                    </>
                )

                }
        </RowOfProducts>
    )

}
export default GetBestSellersProducts;