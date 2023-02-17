import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { useTheme,Grid } from '@mui/material';
import {IconButton} from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SliderItem from './SliderItem/SliderItem';
import { Slide } from '@mui/material';
import useApi from '../Hooks/useApi';


const Wrapper = styled(Grid)`
    background-color:${props => props.color};
    height: 500px;
    padding:2%;
    @media (max-width: 768px) {
        height:400px;
    }
`;

const SliderButton = styled(IconButton)`
        @media (max-width: 768px) {
            height:200px;
        }
`;


function ShowSlide(props){
    const categorie = props.currentCategory;
    return(
        <SliderItem src={categorie.category_image}  title = {categorie.name} description ={categorie.description} xs={10} />
        
    )
};



const Slider = () =>{
    // to use the theme already stated in App.js
    const theme = useTheme();
    // a hook to set the current in the array for the slide
    const [current,setCurrent] = useState(0);

    //the following gets all information about the categories
    var general_category = useApi('http://localhost:5000/general_category');

    let numberOfElements =  0;
    if(general_category.success === true){
        
        numberOfElements = general_category.data.length;
    }

    const nextSlide = () =>{
        if(current===numberOfElements-1){
            setCurrent(0);
        }else{
            setCurrent(current+1);
        }
    };

    const previousSlide = () =>{
    if(current===0){
        setCurrent(numberOfElements-1);
    }else{
        setCurrent(current-1);
    }
    };
    
    // Move to next slide every 2 seconds
    useEffect(()=>{
        const interval = setInterval(() => {
            nextSlide();
        },2000);
        return () => clearInterval(interval);
    }, [current]);

    


    return(
        <Wrapper
         color={theme.palette.primary.dark}
         container
         direction="row"
         justifyContent="space-evenly"
         alignItems="center">
            <SliderButton  xs={1} onClick={() =>previousSlide()} >
                <ArrowCircleLeftIcon/>
            </SliderButton>

            {(general_category.success === false) ? (
                <>
                </>
            ):(
                
                
              <>
              <ShowSlide  currentCategory = {general_category.data[current]}/>
              </>
            )
            }

            <SliderButton  xs={1} onClick={() =>nextSlide()}>
                <ArrowCircleRightIcon/>
            </SliderButton>
        </Wrapper>
    )
}
export default Slider;