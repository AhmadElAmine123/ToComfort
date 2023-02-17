import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { Alert } from '@mui/material';
import useApi from '../components/Hooks/useApi';
import {useNavigate} from 'react-router-dom';

const Wrapper = styled.div`
    width:100%;
    padding:25%;
    padding-bottom:10%;
    padding-top:5%;
    text-align:center;
`;
const Form = styled.div`
    width:50%;
    border-style:solid;
    border-color:lightgrey;
    padding:5%;
    text-align:center;
`;
const Input  = styled.input`
    width:50%;
    height:40px;
`;
const TextField = styled.label`
    font-size:25px;
    display: block;
`;
const Button = styled.button`
    margin-top:10px;
    display: block;
    margin-left:45%;
`;


const SignIn = () =>{
    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('');

    let navigate = useNavigate();

    let [submitInfo,setSubmitInfo] = useState(false);
    let [query,setQuery] = useState('http://localhost:5000/authentication/p/s/s');
    let authentication = useApi(query);
    function editEmail(event){
        setEmail(event.target.value);
    }
    function editPassword(event){
        setPassword(event.target.value);
    }
    function buttonClick(){
        setSubmitInfo(true);
        setQuery('http://localhost:5000/authentication/p/'+email+'/'+password);
    }
    useEffect(()=>{
        if(authentication.success==true && authentication.data != null && submitInfo==true){
            
            if(authentication.data[0] != null && authentication.data[0] != undefined){
                sessionStorage.setItem("user",authentication.data[0].id);
                navigate("/");
            }
        }
    })


    return(
        <Wrapper>
        <Form>
            
        <h1>Sign In</h1>
        <TextField>email </TextField>
        <Input type="text" id="fname" name="fname" onChange={editEmail}/>
        <TextField>password: </TextField>
        <Input type="password" id="password" name="password" onChange={editPassword}/>
        <Button onClick={buttonClick}>Sign In</Button>
            {
                (submitInfo && authentication.success==true)?(
                    <>
                    <Alert severity="error">Incorrect Email and password</Alert>
                    </>

                ):(
                    <>
                    </>
                )
            }
            </Form>
        </Wrapper>
    )

}
export default SignIn;