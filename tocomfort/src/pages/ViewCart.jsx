import React,{useState} from 'react';
import styled from 'styled-components';
import RectangleProduct from './viewCartComponents/RectangleProduct';
import {Grid,Typography,Box,Button} from '@mui/material';
import useIsLoggedIn from '../components/Hooks/useIsLoggedIn';
import { useNavigate } from 'react-router-dom';
const Wrapper = styled.div`
width:100%;
min-height:500px;
display:flex;
flex-direction: row;

`

function CartItems({pInCart}) {
    let products = [];
    for (let i=0;i<pInCart.length;i++){
  
      products.push(
            <RectangleProduct key={i}productID={pInCart[i]}/>
            );
    }
    return products;
  
  
  }
const ViewCart =() =>{
    let totalPrice = sessionStorage.getItem("totalPrice");
    let numberOfProductsInCart=0;
    let navigate = useNavigate();
    let isLoggedIn = useIsLoggedIn();


    var products_in_cartID =[];
    if(sessionStorage.getItem("products_in_cart")!=null){
      products_in_cartID=sessionStorage.getItem("products_in_cart").split(',');
      numberOfProductsInCart=products_in_cartID.length;
    }


    return(
        <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        >
            <Box sx={{width:2/2}}>
            <Typography variant ='h4' color='navigationBar.text' >Total price = {sessionStorage.getItem("totalPrice")} $  </Typography>
            {(isLoggedIn)?(
                <button onClick={()=>{navigate('/paymentForm')}}>Finish the order</button>
            ):(
                <button onClick={()=>{navigate('/signIn')}}>SignIn before Payment</button>

            )}
            </Box>
            {(products_in_cartID.length==0)?(
                <></>

            ):(
                <>
                <CartItems pInCart={products_in_cartID}/>
                </>

            )}
        </Grid>
    )

}
export default ViewCart;