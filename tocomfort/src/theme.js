import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#e2e2e2',
            light: '#e2e2e2',
            dark: '#c9c9c9',
            contrastText: '#636363',
        },
        secondary: {
            main: '#e0e0e0',
            light: '#fff263',
            dark: '#c49000',
            contrastText: '#636363',
        }, navigationBar:{
            main: '#e0e0e0',
            text: '#636363',
        }
        
      },
      components: {
        MuiCard: {
            styleOverrides:{
                root: {
                    backgroundColor:'#e2e2e2',
                }
            }
        }
      }
})
export default theme;
