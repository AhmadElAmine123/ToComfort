import React , {useState} from 'react';
import styled from 'styled-components';
import RightIcons from './RightIcons';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Link,
    IconButton
  } from "@mui/material";
  import MenuIcon from '@mui/icons-material/Menu';

  const DrawerComponent = () =>{
    const [openDrawer, setOpenDrawer] = useState(false);
        return(
            <>
            <Drawer open={openDrawer}  onClose={() => setOpenDrawer(false)} >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText >
                        <Link  underline="none" to="/">Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                        <Link  underline="none" to="/about">About</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                        <Link  underline="none" to="/contact">Contact</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                        <Link  underline="none" to="/about">Faq</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)} sx={{maxWidth:200}}>
                        <ListItemText>
                            
                        <RightIcons/>
                        </ListItemText>
                    </ListItem>
                </List>
      </Drawer>
       <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
       <MenuIcon />
        </IconButton>
        </>
        )
  }
  export default DrawerComponent;