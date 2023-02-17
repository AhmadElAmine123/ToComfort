import React,{useState} from 'react';
import styled from 'styled-components';
import useApi from '../components/Hooks/useApi';
import {Typography} from '@mui/material';

function returnProductFromId(data,id){
    var temp = null;
    data.forEach(async (d) =>{
        if(d.id == id){
            temp= d;
        }
    }
    );
    return temp;

}

function productsToText(product){
    return(
        <li key={Math.floor(Math.random() * 1000000)} >
        <Typography variant= 'span'>{product.name}  </Typography>
        <Typography variant= 'span'>{product.price}$</Typography>
        </li>
    )
}

function ShowProduct({data}){
    var temp = []
    data.forEach(async (d) =>{
        temp.push(productsToText(d))
    });
    let list = <ol>{temp}</ol>
    return list;
}


const PaymentForm = () =>{
    let getOrderFromSession = sessionStorage.getItem("products_in_cart");

    let fetchData = useApi('http://localhost:5000/cartProducts/p/'+getOrderFromSession);
    let [cartProducts,setCartProducts]=useState([]);
    let [hasSelectedProducts,setHasSelectedProducts] = useState(false);
    if(fetchData.success==true && hasSelectedProducts==false){
        let temp = [];
        let arrayOfID = getOrderFromSession.split(',');
        for (var i=0;i<arrayOfID.length;i++){
            temp.push( returnProductFromId(fetchData.data,parseInt(arrayOfID[i])))
        }
        setCartProducts(temp);
        setHasSelectedProducts(true);
    }

    //Adding Order to the database
    let user_id= sessionStorage.getItem("user");
    let totalPrice = sessionStorage.getItem("totalPrice");
    
    const [time, setTime] = useState(new Date().getTime());
    let itemsId = sessionStorage.getItem("products_in_cart");
    
    let addOrder = useApi('http://localhost:5000/addOrder/p/'+user_id+'/'+totalPrice+'/'+time+'/'+itemsId)







    return(
        <div>
            <div>The order has been made for: </div>
            {(hasSelectedProducts)?(
                
            <ShowProduct data = {cartProducts}/>

            ):(
                <></>
            )}
            <div>Total Price: {totalPrice}$</div>
        </div>

    )

}
export default PaymentForm;