import React from 'react';
import styled from 'styled-components';
import {Grid,Typography} from '@mui/material';
import CustomizedBreadcrumbs from './shopComponents/CustomizedBreadcrumbs';
import SearchBar from './shopComponents/SearchBar';
import FilterSideBar from './shopComponents/filterSideBar/FilterSideBar';

import ProductRow from '../../components/ProductComponents/ProductRow';
import useApi from '../../components/Hooks/useApi';

import { useLocation,useParams } from "react-router-dom";
import GetProducts from './shopComponents/GetProducts';

const Wrapper = styled(Grid)`
`
const SideMenu = styled.div`
`


const Shop = () =>{
    

    let location = useLocation();

    const params = new URLSearchParams(location.search);




    let  categoryID  = params.get('category');
    if(categoryID == ''){
        categoryID = null;
    }
    let  product_categoryID  = params.get('options');
    if(product_categoryID == ''){
        product_categoryID = null;
    }
    let  min  = params.get('min');
    let  max  = params.get('max');
    if(min == '' || isNaN(min)){
        min = null;
    }
    if(max == ''|| isNaN(max)){
        max = null;
    }
    let  search  = params.get('search');
    if(search == ''){
        search = null;
    }


    var filteredProducts = useApi('http://localhost:5000/products_by_filters/p/'+categoryID+'/'+product_categoryID+'/'+min+'/'+max+'/'+search);
    








   
    let filters = {
        search:location.search,
    }


    

    return(
            <Wrapper
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            >
                <Grid sx={{ backgroundColor: 'primary.main',height:200,padding:10 }} item>
                    <Typography color="navigationBar.text" variant = "h2">Shop</Typography>
                    <CustomizedBreadcrumbs/>
                </Grid>
                <Grid item><SearchBar/></Grid>
                <Grid
                item
                container
                direction="row"
                justifyContent="space-around"
                alignItems="stretch">
                    <Grid xs={2} item><FilterSideBar/></Grid>
                    <Grid  xs={9.5}  item>
                    {(filteredProducts.success === false) ? (
                        <>
                        </>
                    ):(
                        <> 
                        <GetProducts filteredProducts={filteredProducts}/>
                        </>
                    )

                    }
                        </Grid>
                </Grid>
            </Wrapper>
    )

}
export default Shop;