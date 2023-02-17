import React,{useState} from 'react';
import {IconButton,TextField,Grid,Input} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartMenu from './ButtonWIthMenu/ShoppingCartMenu';
import AccountMenu from './ButtonWIthMenu/AccountMenu';
import {useNavigate,useLocation,createSearchParams} from 'react-router-dom';


const RightIcons =()=>{

    

    let navigate = useNavigate();
    
    let [inputValue,setInputValue]=useState('');

    function searchForProduct (){
        const params = new URLSearchParams();
        params.delete('search');
        params.append('search', inputValue);
        
        navigate({
            pathname: '/shop/',
            search: `?${createSearchParams(params)}`,
        });
    }
    
    const inputChange = (event)=>{
        setInputValue(event.target.value);
    }



    return(
        <div>
            <Input id='searchBar' size="small" placeholder="Search All Products" variant="standard"  onChange={inputChange} />
            <IconButton onClick={searchForProduct} aria-label="search">
                <SearchIcon fontSize="small"/>
            </IconButton>
            <ShoppingCartMenu/>
                
            <AccountMenu/>
        </div>
    )

}
export default RightIcons;