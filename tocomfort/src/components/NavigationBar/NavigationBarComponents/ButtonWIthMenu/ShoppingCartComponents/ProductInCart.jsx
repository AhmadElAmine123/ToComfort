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
import useApi from '../../../../Hooks/useApi';

const CardImage = styled(CardMedia)`
  height:90px;
  @media (max-width: 90px) {
    height:90px;
  }
`
const CardWrapper = styled(Card)`

    margin-bottom:5px;
    width:250px;
    
  @media (max-width: 768px) {
    width:120px;
  }
`

const ProductInCart = ({productID}) => {

  let navigate = useNavigate();
  let fetchData =  useApi('http://localhost:5000/product_by_id/p/'+productID);
  let product ={};
  
  if(fetchData.success == false || fetchData.loading == true ){
    product={
      Product_Image_src:'',
      name:'loading...',
      description:'loading',
      price:'loading',
      image:'loading',
      available:'loading',
    }
  }else{
    if(fetchData.data[0]!=null){
      product=fetchData.data[0];

    }else{
      product={
        Product_Image_src:'',
        name:'loading...',
        description:'loading',
        price:'loading',
        image:'loading',
        available:'loading',
      }

    }
  }
    const theme = useTheme();
    return(
        <CardWrapper sx={{ width:150,mr:1,mt:0,ml:5,display: 'flex'}}  >
        <CardActionArea sx={{ display: 'flex', flexDirection: 'row' }}>
          <CardContent>
          <CardImage
            component="img"
            image={product.Product_Image_src}
            alt="product image"
            sx={{ height: 90}}
          />
            <Typography gutterBottom variant="body2" component="div">
              {product.name}
            </Typography>
            
            <Typography variant="body2" color="text.secondary">
                {product.price}$
            </Typography>
          </CardContent>
        </CardActionArea>
      </CardWrapper>
    );
}
export default ProductInCart;