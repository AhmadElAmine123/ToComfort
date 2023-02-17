import React from 'react';
import {Grid} from '@mui/material';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import useApi from '../../components/Hooks/useApi';


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

const ProductRow = (props) =>{
    var categoryID = '';
    
    if(props.categoryID === undefined){
        categoryID = 'product';
    }else{
        categoryID = 'products_by_category/p/'+props.categoryID;
    }

    var response = useApi('http://localhost:5000/'+categoryID);

    
    return(
        <RowOfProducts 
                container 
                columnSpacing={{ xs: 2, sm: 1, md: 1 }}
                direction="row"
                justifyContent="center"
                alignItems="flex-start">
                    {(response.success === false) ? (
                <>
                
                </>

                    ):(
                        <> 
                        <Product data = {response.data}/>
                         </>
                    )

                    }
        </RowOfProducts>
    );
}
export default ProductRow;