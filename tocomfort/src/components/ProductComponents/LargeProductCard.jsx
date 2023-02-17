import React from 'react';
import styled from 'styled-components';
import {Paper,Box,Grid,Typography,Button} from '@mui/material';
import { useLocation } from 'react-router-dom';

import useApi from '../Hooks/useApi';

const Wrapper = styled(Paper)`


`
const ProductImage = styled.img`
    width:100%;
    height:300px;
    @media (max-width: 768px) {
        height:150px;
    }
`

const LargeProductCard = ({productID}) =>{

  var products_in_cart = sessionStorage.getItem("products_in_cart");
  // Assign value to a key
  sessionStorage.setItem("products_in_cart", products_in_cart);
  let product ={};

  function addToCart(){

    var products_in_cart = sessionStorage.getItem("products_in_cart");
    var totalPrice = sessionStorage.getItem("totalPrice");
    const thisProduct = productID;
    if(products_in_cart=='null' || products_in_cart==null){
      products_in_cart=thisProduct;
      totalPrice=product.price;

    }else{
      products_in_cart+=','+thisProduct;
      totalPrice=parseInt(totalPrice)+parseInt(product.price);

    }
    //products_in_cart.push(thisProduct);
    // Assign value to a key
    sessionStorage.setItem("products_in_cart", products_in_cart);
    sessionStorage.setItem("totalPrice", totalPrice);
    
    window.location.reload(false);

  }

    const fetchData =  useApi('http://localhost:5000/product_by_id/p/'+productID);
  if(fetchData.success == false){
    product={
      Product_Image_src:'',
      name:'loading...',
      description:'loading',
      price:'loading',
      image:'loading',
      quantity_available:'loading',
    }
  }else{
    product=fetchData.data[0];

  }
    return(
        <div>
            <Paper elevation={3} sx={{m:10, p:5,height:400}}>
                <Grid 
                container
                direction="row" 
                justifyContent="flex-start"
                alignItems="stretch"
                >

                <Grid 
                item
                container
                direction="column"
                justifyContent="space-around"
                alignItems="baseline"
                xs={6}
                >
                    <Box>
                    <Typography variant="h3">{product.name}</Typography>
                    <Typography variant="span" sx={{ fontStyle: 'italic' }}>Price: {product.price}$</Typography>
                    <br/>
                    <br/>
                    
                    <Typography variant="h6">{product.description}</Typography>
                    <Typography variant="h6">Availability: {product.quantity_available} </Typography>
                    <Typography variant="h6">Choose quantity</Typography>
                    </Box>
                    <Button variant="contained" color='secondary' onClick={addToCart}>Add to cart</Button>
                </Grid>

                <div >
                <ProductImage src={product.Product_Image_src}/>
                </div>
                </Grid>
            </Paper>
            </div>
    )

}
export default LargeProductCard;