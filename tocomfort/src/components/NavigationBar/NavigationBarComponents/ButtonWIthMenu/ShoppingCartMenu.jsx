import React,{useState} from 'react';
import styled from 'styled-components';
import {Menu,MenuItem,Typography,Grid,IconButton,Badge,Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import ProductInCart from './ShoppingCartComponents/ProductInCart';
import useApi from '../../../Hooks/useApi';
import { useNavigate } from 'react-router-dom';
 
const Wrapper = styled.div`
    cursor:pointer;
    display:inline-block;
`;

const MenuWrapper = styled(Menu)`
  cursor:pointer;
`;


function CartItems({pInCart}) {
  let products = [];
  for (let i=0;i<pInCart.length;i++){

    products.push(
        <MenuItem key={i}>
          <ProductInCart productID={pInCart[i]}/>
        </MenuItem>
          );
  }
  return products;


}



const ShoppingCartMenu = (props) =>{
    let totalPrice = sessionStorage.getItem("totalPrice");
    let numberOfProductsInCart=0;
    let [buttonHasBeenClicked,setButtonHasBeenClicked]=useState(false);


    var products_in_cartID =[];
    if(sessionStorage.getItem("products_in_cart")!=null){
      products_in_cartID=sessionStorage.getItem("products_in_cart").split(',');
      numberOfProductsInCart=products_in_cartID.length;
    }
    //the following fuctions and hook allow the showing of the menu when hover
    const [anchorEl, setAnchorEl] = React.useState(null);

    let navigate = useNavigate();


    function handleClick(event) {
      if (anchorEl !== event.currentTarget) {
        setAnchorEl(event.currentTarget);
      }

    }
  
    function handleClose() {
      setAnchorEl(null);
      navigate('/viewCart');
    }
  



    return(
        <Wrapper>
            <Typography
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            onMouseOver={handleClick}
            color={props.color}
            variant='span'
          >
            <IconButton aria-label="shoppingBag">
                    <Badge badgeContent={numberOfProductsInCart} color="primary">
                    <ShoppingCartIcon fontSize="small" />
                </Badge>
                </IconButton>

        </Typography>


        <MenuWrapper
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose  }} 
          
        >
        <div onClick={handleClose}>
          <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="baseline">
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
                <Typography variant="span1">Total = {totalPrice}$</Typography>
                <MenuItem><Button >Checkout</Button></MenuItem>
            </Grid>
            <CartItems pInCart = {products_in_cartID}/>
          </Grid>
        </div>
      </MenuWrapper>
        </Wrapper>
    )

}
export default ShoppingCartMenu;