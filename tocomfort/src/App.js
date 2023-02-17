import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '@mui/material/styles';
import {Grid} from '@mui/material';
import theme from './theme';
import NavBar from './components/NavigationBar/NavBar';
import { StayPrimaryLandscape } from '@mui/icons-material';
import MyRouter from './pages/Router';
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ProductPage from './pages/ProductPage/ProductPage';
import OnHoverMenu from './components/NavigationBar/NavigationBarComponents/OnHoverMenu/OnHoverMenu';


const Wrapper = styled.div`
    
`;

const App = () =>{


    return(
        <Router>
            <ThemeProvider theme = {theme}>
                <NavBar/>
                <MyRouter/>
                <Footer />
            </ThemeProvider>
        </Router>
    );
}
export default App;