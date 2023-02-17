import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useTheme,Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import useApi from '../Hooks/useApi';

const CardImage = styled(CardMedia)`

  height:250px;
  @media (max-width: 768px) {
    height:120px;
  }
`
const CardWrapper = styled(Card)`

    margin-bottom:5px;
    width:250px;
    
  @media (max-width: 768px) {
    width:120px;
  }
`

const ProductCard = ({productID}) => {

  
  let navigate = useNavigate();
  const fetchData =  useApi('http://localhost:5000/product_by_id/p/'+productID);
 let product ={};
  if(fetchData.success == false){
    product={
      Product_Image_src:'',
      name:'loading...',
      description:'loading',
      price:'loading',
      image:'loading',
      available:'loading',

    }
  }else{
    product=fetchData.data[0];

  }
    const theme = useTheme();
    return(
        <CardWrapper sx={{ width:200,mr:1,mt:0,ml:0}}  onClick={() => navigate('/productPage/'+productID)}  >
        <CardActionArea>
          <CardImage
            component="img"
            image={product.Product_Image_src}
            alt="product image"
            sx={{ height: 180}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
              {product.desc}
            </Typography>
            
            <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center">
                <Grid item xs={6} md={6}>
                <Typography variant="body2" color="text.secondary">
                    {product.price}$
                </Typography>
                </Grid>
                <Grid item xs={6} md={6}>
                    <ShoppingCartIcon/>
                </Grid>
                
            </Grid>
          </CardContent>
        </CardActionArea>
      </CardWrapper>
    );
}
export default ProductCard;