import React,{useState} from 'react';
import {Typography,Grid,TextField} from '@mui/material';
import { useNavigate, createSearchParams,useLocation } from "react-router-dom";


const PriceRange = () =>{

    let navigate = useNavigate();

    const location = useLocation();

    const params = new URLSearchParams(location.search);

    const LoadPreviousMin = () =>{
        if(params.get('min')!=undefined){
            return (params.get('min'));

        }
        return 0;
    }
    const LoadPreviousMax = () =>{
        if(params.get('max')!=undefined){
            return (params.get('max'));
        }
        return 4000;
    }





    const [minimum,setMin]=useState(LoadPreviousMin);
    const [maximum,setMax]=useState(LoadPreviousMax);

    const changeProducts = (min,max) =>{
        params.delete('min');
        params.append('min', min);
        
        params.delete('max');
        params.append('max',max);

    navigate({
      pathname: location.pathname,
      search: `?${createSearchParams(params)}`,
    });
    }

    const minChange = (event)=>{
        setMin(event.target.value);
        changeProducts(event.target.value,maximum);
    }

    const maxChange = (event)=>{
        
        setMax(event.target.value);
        changeProducts(minimum,event.target.value);
    }


    return(
        <Grid container
        direction="column"
        justifyContent="space-around"
        alignItems="flex-start">
            <Typography variant="h5" color="navigationBar.text">Price</Typography>
            <Grid
            container
            direction="row"
            
            justifyContent="space-around"
            alignItems="center">
                <Grid 
                item
                xs={4}
                >
                    <TextField id="min" label="min" variant="outlined" defaultValue={0} onChange={minChange}/>

                </Grid>

                <Typography variant="span" color="navigationBar.text">TO</Typography>
                
                
                <Grid
                 item
                xs={4}>
                    <TextField id="max" label="max" variant="outlined"  defaultValue={4000} onChange={maxChange}/>
                </Grid>

            </Grid>
        </Grid>
    )

}
export default PriceRange;