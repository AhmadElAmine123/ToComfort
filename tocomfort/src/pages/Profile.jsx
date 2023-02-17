import React from 'react';
import styled from 'styled-components';
import useApi from '../components/Hooks/useApi';
import {Typography} from '@mui/material';

const Wrapper = styled.div`


`;
const TextField = styled.label`
    font-size:25px;
    display: block;
`;

const Profile = () =>{
    let userID = sessionStorage.getItem("user");
    let fetchUserData = useApi('http://localhost:5000/getUser/p/'+userID);

    let fname = '';
    let lname = '';
    let email = '';

    if(fetchUserData.success){
        email = fetchUserData.data[0].email;
        fname = fetchUserData.data[0].first_name;
        lname = fetchUserData.data[0].last_name;

    }

    return(
        <div>
            {
                (fetchUserData.success)?(
                    <>
                    <TextField>Email: {email}</TextField>
                        <TextField>First Name: {fname}</TextField>
                        <TextField>Last Name: {lname}</TextField>
                    </>
                ):(
                    <></>
                )
            }
            
        </div>
    )

}
export default Profile;