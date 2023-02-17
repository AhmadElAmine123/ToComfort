import React,{useState,useEffect} from 'react';
import {Typography,Grid,TextField} from '@mui/material';
import useApi from '../../../../../components/Hooks/useApi';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useNavigate, createSearchParams,useLocation } from "react-router-dom";


function LoadButtons(props){
    let items = [];
    const d = props.data;
    for (let i =0;i<d.length;i++){
        const id = d[i].id;
        const name= d[i].name;
        items.push(<FormControlLabel key={i} value={id} control={<Radio />} label={name} />);

    }
    return(items);
}



const Options = () =>{
    const location = useLocation();

    
    const params = new URLSearchParams(location.search);
    

    
    let navigate = useNavigate();

    
    const LoadPrevious = () =>{
        if(params.get('options')!=undefined){
            return (params.get('options'));
        }
        return '';
    }


    const [value, setValue] = useState(LoadPrevious);
    
    if(params.get('category')== undefined){
        params.append('category', '');
    }


    let DataLink='http://localhost:5000/category_from_general/p/'+params.get('category');
    
    if(params.get('category')=='undefined' || params.get('category')==''){
        DataLink='http://localhost:5000/product_category/';
    }

    const fetchData =  useApi(DataLink);
    


    const handleChange = (event) => {
        setValue(event.target.value);
        changeProducts(event.target.value);
    };

      

    const changeProducts = (props) =>{
        params.delete('options');
        params.append('options', props);
    navigate({
      pathname: location.pathname,
      search: `?${createSearchParams(params)}`,
    });
    }
    return(
        <Grid container
        direction="column"
        justifyContent="space-around"
        alignItems="flex-start">
            <Typography variant="h5" color="navigationBar.text">Options</Typography>
            <FormControl>
                <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel  value={''} control={<Radio />} label={"All Items"} />
                {(fetchData.success===true)?(
                    <>
                    <LoadButtons data={fetchData.data}/> 
                    </>
                ):(
                    <>
                    </>
                )}
                </RadioGroup>
            </FormControl>
        </Grid>
    )

}
export default Options;