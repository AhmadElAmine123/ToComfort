import React from 'react';
import styled from 'styled-components';
import {Paper,Grid,Button,Typography} from '@mui/material';
import useIsUnderBreakPoint from '../../../Hooks/useIsUnderBreakPoint';


const ShopButton = styled(Button)`
    @media (max-width: 768px) {
        height:50px;
    }
`

const Description = ({title,description}) =>{
    const isSmallScreen = useIsUnderBreakPoint();

    const buttonProps = {
        size: isSmallScreen ? "small" : "medium"
    };

    return(
        <Paper    sx={{ height: '100%',width:'48%',ml:1  }} elevation={0}>
                <Grid
                 sx={{ height: '100%' }}
                container
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                >
                    <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    >
                        
                    <h2>{title}</h2>
                    <Typography variant="body2" gutterBottom>
                    {description}
                    </Typography>
                    </Grid>
                    <Button {...buttonProps} variant="contained" color="primary">Shop Now</Button>
                </Grid>
            </Paper>

    )
}
export default Description;