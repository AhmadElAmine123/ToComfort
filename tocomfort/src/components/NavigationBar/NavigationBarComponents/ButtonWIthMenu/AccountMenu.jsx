import React,{useState} from 'react';
import {Menu,MenuItem,Typography,Grid,IconButton} from '@mui/material';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import WhenLoggedIn from './AccountMenuItems/WhenLoggedIn';
import WhenNotLoggedIn from './AccountMenuItems/WhenNotLoggedIn';
import { useEffect } from 'react';
  
const Wrapper = styled.div`
    cursor:pointer;
    display:inline-block;
`;

const MenuWrapper = styled(Menu)`
  cursor:pointer;
`;



const BundlesMenu = (props) =>{
  
  let [user,setUser]=useState(null);
  
  let [isSignedIn,setIsSignedIn]=useState(false);

  let navigate = useNavigate();
  
  

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }
  useEffect(()=>{
    if(sessionStorage.getItem("user") == 'undefined' || sessionStorage.getItem("user") == 'null' || sessionStorage.getItem("user") == null ){
      setIsSignedIn(false);
    }else if(typeof sessionStorage.getItem("user") == "string"){
      setIsSignedIn(true);
    }
  })
    


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
            <IconButton>
                    <PersonIcon fontSize="small" />
                </IconButton>
      </Typography>
      <MenuWrapper
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        
      >
        {(!isSignedIn)?(
          <WhenNotLoggedIn></WhenNotLoggedIn>
        ):(
          <WhenLoggedIn></WhenLoggedIn>
        )
        }
        
        
        <MenuItem onClick={() => navigate('/adminPage')}>Admin</MenuItem>
        
      </MenuWrapper>
    </Wrapper>
    )
}
export default BundlesMenu;