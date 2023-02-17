import React from 'react';
import { Grid,Button, Typography,Slider } from '@mui/material';
import PriceRange from './filterSideBarComponents/PriceRange';

import Categories from './filterSideBarComponents/Categories';

const FilterSideBar = () =>{
    return(
        <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start">
            <Typography variant='h4' color="navigationBar.text">Filters</Typography>
            <PriceRange/>
            <Categories/>
        </Grid>
    )

}
export default FilterSideBar;