import React,{useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import useApi from '../../components/Hooks/useApi';
import {Box,Card,CardContent,Typography,CardMedia,IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Wrapper = styled.div`
width:40%;
margin:2%;
`;


const RectangleProduct = ({productID}) =>{

    
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
  function deleteItem(){
    var products_in_cartID =[];
    if(sessionStorage.getItem("products_in_cart")!=null){
      products_in_cartID=sessionStorage.getItem("products_in_cart").split(',');
    }
    for(let i= 0;i<products_in_cartID.length;i++){
        if(products_in_cartID[i]==productID){
            products_in_cartID.splice(i,1);
            if(products_in_cartID.length==0){
                sessionStorage.setItem("products_in_cart",null)
                sessionStorage.setItem("totalPrice",null)
        
            }else{
                sessionStorage.setItem("products_in_cart",products_in_cartID.toString())
                let total= parseInt(sessionStorage.getItem("totalPrice"))-parseInt(product.price)
                sessionStorage.setItem("totalPrice",total)
        
            }
            i--;
            break;
        }
    }
    window.location.reload(false);
    
}
  

    return(
        <Wrapper>
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 200 ,height:200}}
                image={product.Product_Image_src}
                alt={product.name}
            />
          <Box sx={{ display: 'flex', flexDirection: 'column',justifyContent:"center",alignItems:"center"}}>
          <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{textTransform: 'uppercase'}} >
          {product.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           {product.desc}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
           {product.price} $
          </Typography>
        </CardContent>
            </Box>
            <Box sx={{display:'flex'}}>
                <IconButton sx={{borderRadius:1}}  onClick={deleteItem}>
                    <DeleteIcon sx={{height:100,width:50}}/>
                </IconButton>

            </Box>
            </Card>
            
        </Wrapper>
    )

}
export default RectangleProduct;