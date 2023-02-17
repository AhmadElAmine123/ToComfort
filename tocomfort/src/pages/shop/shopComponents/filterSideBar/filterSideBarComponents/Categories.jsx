import React, {useState} from 'react';
import {Typography,Grid,TextField} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import useApi from '../../../../../components/Hooks/useApi';
import Options from './Options';
import { useNavigate, createSearchParams,useLocation } from "react-router-dom";

function LoadButtons(props){
    const items = [];
    const d = props.data;
    for (let i =0;i<d.length;i++){
        const id = d[i].id;
        const name= d[i].name;
        items.push(<FormControlLabel key={i} value={id} control={<Radio />} label={name} />);
    }
    return(items);
}

const Categories = () =>{

    const location = useLocation();

    
    const params = new URLSearchParams(location.search);
    
    const LoadPrevious = () =>{
        if(params.get('category')!=undefined){
            return (params.get('category'));
        }
        return '';
    }


    const [value, setValue] = useState(LoadPrevious);
    


    const handleChange = (event) => {
        setValue(event.target.value);
        changeProducts(event.target.value);
    };

      
    let navigate = useNavigate();

    const changeProducts = (props) =>{
        params.delete('category');
        params.delete('options');
        params.append('category', props);
    
    navigate({
      pathname: location.pathname,
      search: `?${createSearchParams(params)}`,
    });
    }
    
  var general_category = useApi('http://localhost:5000/general_category');
  
    return(
        <Grid container
        direction="column"
        justifyContent="space-around"
        alignItems="flex-start">
            <Typography variant="h5" color="navigationBar.text">Categories</Typography>
            <FormControl>
                <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value={''} control={<Radio />} label={"All Items"}/>
                {(general_category.success===true)?(
                    <>
                    <LoadButtons data={general_category.data}/> 
                    </>
                ):(
                    <>
                    </>
                )}
                </RadioGroup>
            </FormControl>
                <Options categoryID={value}/>
            

        </Grid>
    )
}
export default Categories;