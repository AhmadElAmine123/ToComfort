import React from 'react';
import {Menu,MenuItem,Typography,Grid,Box} from '@mui/material';
import styled from 'styled-components';
import { useNavigate, createSearchParams,useLocation } from "react-router-dom";
import useApi from '../../../Hooks/useApi';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowButton from '../ArrowButton';
  
const Wrapper = styled.div`
    cursor:pointer;
    display:inline-block;
`;

const MenuWrapper = styled(Menu)`
  cursor:pointer;
  max-height:400px;
`;
const ColumnStyled = styled(Box) `
`;

const CategoriesMenu = (props) =>{
  
  var general_category = useApi('http://localhost:5000/general_category');
  var product_category = useApi('http://localhost:5000/product_category');

  let navigate = useNavigate();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function navigateToShop(generalCategoryID,productCategoryID){
    const params = new URLSearchParams();
    params.delete('options');
    params.append('options', productCategoryID);
    params.delete('category');
    params.append('category', generalCategoryID);
    
    navigate({
      pathname: '/shop/',
      search: `?${createSearchParams(params)}`,
    });

  }

  function Column(props){
    
    let counter = 1;
    const items =[];
    items.push(<Typography color="secondary" variant="h6" key={0}>{props.generalCategory.name}</Typography>)
    for (let i = 0;i<props.productCategory.data.length;i++){
      let generalCategoryID=props.generalCategory.id;
      let productGenerealCategoryID = props.productCategory.data[i].general_category_id;
      if(generalCategoryID== productGenerealCategoryID){
        let productCategoryName=props.productCategory.data[i].name;
        let productCategoryID=props.productCategory.data[i].id;
        items.push(<MenuItem key={counter} onClick={()=>navigateToShop(generalCategoryID,productCategoryID)}><Typography variant="span" >{productCategoryName}</Typography> </MenuItem>)
        counter++;
      }
    }
    return items;
  }


  

function Content(props){
  const table = [];
  for(let i =0;i<props.generalCategory.data.length;i++){
    const column = 
    <ColumnStyled
      key={i}
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      mr={1}
      sx={{ borderRight: 20,borderColor: 'primary.main'  }}>
         <Column generalCategory = {props.generalCategory.data[i]} productCategory={props.productCategory}/>
      </ColumnStyled>
      table.push(column);
  }
  
  return table;
}





    return(
        <Wrapper>
          <Typography
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            onMouseOver={handleClick}
            color={props.color}
            variant='span'
            
          >
            <ArrowButton>
        Categories
        </ArrowButton>
      </Typography>
      <MenuWrapper
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        onClick={()=>{handleClose()}}
      >
        <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        >
            {(general_category.success === false && product_category.success === false) ? (
                <>
                </>
            ):(
              <>
              <Content generalCategory = {general_category} productCategory={product_category}/>
              </>
            )
            }

        </Grid>
      </MenuWrapper>
    </Wrapper>
    )
}
export default CategoriesMenu;