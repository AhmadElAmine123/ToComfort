import React , {useState,useEffect} from 'react';
import {AppBar,Typography,Toolbar,Grid} from '@mui/material';
import DrawerComponent from './NavigationBarComponents/DrawerComponent';
import RightIcons from './NavigationBarComponents/RightIcons';
import Menu from './NavigationBarComponents/Menu';
import Logo from './NavigationBarComponents/Logo';
import useIsUnderBreakPoint from '../Hooks/useIsUnderBreakPoint';


const NavBar = () =>{
    
    const isUnderBreakPoint = useIsUnderBreakPoint();
    return(
        <AppBar position="static" color="navigationBar">
            <Toolbar variant="dense">
                <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >    
            {(isUnderBreakPoint)? (
                    <>
                        <DrawerComponent />
                        <Logo/>
                    </>
            ) : (
                    <>
                        <Logo/>
                        <Menu/>
                        <RightIcons/>
                    </>
                    
                    )}
                    </Grid>
            </Toolbar>
        </AppBar>
        
    )

}
export default NavBar;