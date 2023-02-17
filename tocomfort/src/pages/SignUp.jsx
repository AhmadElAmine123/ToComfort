import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Alert from '@mui/material/Alert';
import {useNavigate} from 'react-router-dom';
import SignUpComplete from './SignUpComponents/SignUpComplete';


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
    display: block;
    margin-left:45%;
    margin-top:10px;
`;
const StyledAlert = styled(Alert)`
    width:47%;
    margin-left:24%;
`


const SignUp = () =>{
    let navigate = useNavigate();

    let [signUpCompletion,setCompletion] = useState(false);
    let [buttonClicked,setButtonClicked] = useState(false);

    let [fname,setFName]=useState('');
    let [lname,setLName]=useState('');
    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('');
    const [time, setTime] = useState(new Date().getTime());
    

    
    const editFName = (event)=>{
        setFName(event.target.value);
    }
    const editLName = (event)=>{
        setLName(event.target.value);
    }
    const editEmail = (event)=>{
        setEmail(event.target.value);
    }
    const editPassword = (event)=>{
        setPassword(event.target.value);
    }

    function allFieldsAnswered(){
        if(fname=='' || fname==null || fname== undefined){
            return false;
        }else if(lname=='' || lname==null || lname== undefined){
            return false;
        }else if(email=='' || email==null || email== undefined){
            return false;
        }else if(password=='' || password==null || password== undefined){
            return false;
        }
        return true;
    }
    function emailRulesApplied(){
        if(email.includes('@')||email.includes('.com')){
            return true;
        }
        return false;
    }
    function passwordRulesApplied(){
        if(password.length<6){
            return false;
        }
        return true;
    }
   
    
      useEffect(() => {
        const keyDownHandler = event => {
  
            if (event.key === 'Enter') {
              event.preventDefault();
      
              // changes the buttonClicked useState
              buttonClick();
            }
          };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, []);
      


    function buttonClick(){
        setButtonClicked(true);

    }
    return(
        <Wrapper>
            
            <Form>
             {
                (passwordRulesApplied()==true && buttonClicked==true && allFieldsAnswered()==true && emailRulesApplied()== true)?(
                     
                <>
                <SignUpComplete fname={fname} lname={lname} email={email} password={password} timestamp={time}/>
                
                </>
            
            ):(
                <>
                <h1>Sign Up</h1>
            
                {
                    (allFieldsAnswered()==false && buttonClicked==true )?(
                        <>
                        <Alert severity="error">Please fill all fields</Alert>
                        </>
                    ):(
                        <>
                        </>
                    )
                }
                <TextField>First Name: </TextField>
                <Input type="text" id="fname" name="fname" onChange={editFName}/>
                <TextField>Last Name: </TextField>
                <Input type="text" id="lname" name="lname" onChange={editLName}/>
                
                <TextField>email: </TextField>
                <Input type="text" id="email" name="email" onChange={editEmail}/>
                {
                    (emailRulesApplied()==false && buttonClicked==true )?(
                        <>
                        <StyledAlert severity="error">This is not an Email</StyledAlert>
                        </>
                    ):(
                        <>
                        </>
                    )
                
                }
                
                <TextField>password: </TextField>
                <Input type="password" id="password" name="password" onChange={editPassword}/>
                {
                    (passwordRulesApplied()==false && buttonClicked==true )?(
                        <>
                        <StyledAlert severity="error">The password has to be at least 6 characters</StyledAlert>
                        </>
                    ):(
                        <>
                        </>
                    )
                }
                <Button onClick={buttonClick}>Sign Up</Button>
                </>
            )
        }
        </Form>
        </Wrapper>
    )
}
export default SignUp;