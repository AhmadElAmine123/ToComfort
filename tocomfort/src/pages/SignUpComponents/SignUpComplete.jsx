import React from 'react';
import styled from 'styled-components';
import Alert from '@mui/material/Alert';
import useApi from '../../components/Hooks/useApi';

const SingUpComplete =({fname,lname,email,password,timestamp}) =>{
    
    let addUser = useApi('http://localhost:5000/addUser/p/'+fname+'/'+lname+'/'+email+'/'+password+'/'+timestamp);
    return(
        <div>
            <Alert severity="success">Sign up successful</Alert>

        </div>
    )

}
export default SingUpComplete;