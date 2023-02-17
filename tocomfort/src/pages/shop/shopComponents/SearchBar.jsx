import styled from 'styled-components'
import React,{useState} from 'react';
import {Button} from '@mui/material';
import { useNavigate, createSearchParams,useLocation } from "react-router-dom";

const Wrapper = styled.div`
width:100%;
text-align:center;
`
const SearchField = styled.input`
    margin:20px;   
    width:25%;
    height:25px;
`

const SearchBar  = ()=> {

    let navigate = useNavigate();

    const location = useLocation();

    const params = new URLSearchParams(location.search);

    let loadedValue=params.get('search');
    if(loadedValue==undefined){
        loadedValue ='';
    }
    

    const changeProducts = (props) =>{
        params.delete('search');
        params.append('search', props);
    navigate({
      pathname: location.pathname,
      search: `?${createSearchParams(params)}`,
    });
}
    
    const inputChange = (event)=>{
        changeProducts(event.target.value);
    }


    return(
        <Wrapper>
            <SearchField type="text" id='searchBar' defaultvalue ={loadedValue} onChange={inputChange}/> 
            <Button sx={{ backgroundColor: 'primary.main',color:'white',fontSize: 15 }} >Search</Button>

        </Wrapper>
    )

}
export default SearchBar;