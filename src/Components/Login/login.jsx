import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import credientials from '../../Lib/userCredentials';
import { useNavigate } from "react-router-dom";

function Login (){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});

    const Login = () =>{
        setError({
            "email": "", 
            "password": "", 
         })
        if(email === "" && password === ""){
            setError({
               "email": "Email is required", 
               "password": "Password is required", 
            })
        }
        else if(email !== "" && password === ""){
            setError({
                "email": "", 
                "password": "Password is required", 
             })
        }
        else if(email === "" && password !== ""){
            setError({
                "email": "Email is required", 
                "password": "", 
             })
        }
        else{
            if(
                credientials.email !== email &&
                credientials.password !== password 
            ){
                setError({
                    "email": "Email is invalid", 
                    "password": "Password is invalid", 
                 })
            }
            else if(
                credientials.email === email &&
                credientials.password !== password 
            ){
                setError({
                    "email": "", 
                    "password": "Password is invalid", 
                 })
            }
            else if(
                credientials.email !== email &&
                credientials.password === password 
            ){
                setError({
                    "email": "Email is invalid", 
                    "password": "", 
                 })
            }
            else{
                localStorage.setItem("user", JSON.stringify(
                    {
                        email: email,
                        password: password
                    }
                ));
                navigate("/home");
            }
        }
    }

    console.log("eroror",Object.values(error).length);

    return (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="Enter email" 
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
            />
            {
                Object.values(error).length > 0 &&
                    <span>
                        {error.email}
                    </span>
            }
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Password" 
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
            />
            {
                Object.values(error).length > 0 &&
                    <span>
                        {error.password}
                    </span>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button 
                variant="primary" 
                onClick={()=>{
                   Login()
                }}
            >
                Submit
            </Button>
        </Form>
      );
}

export default Login;