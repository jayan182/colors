import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from 'react';
import credientials from '../../Lib/userCredentials';
import { useNavigate } from 'react-router-dom';

function Login (){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [image, setImage] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState({});

    const register = () =>{
        setError({
            "email": "", 
            "password": "", 
            "confirmPassword": "", 
            "role": "", 
        })
        
        if(
            email !== "" && 
            confirmPassword !== "" &&
            password !== "" && 
            role !== ""
        ){
            let user = {
                email: email,
                image: image,
                password: password,
                role: role
            };

            let user_list = localStorage.getItem('user_list');

            if(user_list === null){
                localStorage.setItem("user_list", JSON.stringify([user]));
                navigate("/");
            }
            else{
                user_list  = JSON.parse(user_list);
            
                let check_user = user_list.filter((tmp)=>{
                    return tmp.email === email && tmp.role === role;
                })

                if(check_user.length > 0){
                    alert("user already exists");
                }     
                else{
                    user_list.push(user);
                    localStorage.setItem("user_list", JSON.stringify(user_list));
                    navigate("/");
                }          
            }
        }
        else if(
            email === "" && 
            confirmPassword === "" &&
            password === "" && 
            role === ""
        ){
            setError({
                "email": "Email is required", 
                "password": "Password is required", 
                "confirmPassword": "Confirm Password is required", 
                "role": "Role is required", 
            })
        }
        else if(
            email !== "" && 
            confirmPassword === "" &&
            password === "" && 
            role === ""
        ){
            setError({
                "email": "", 
                "password": "Password is required", 
                "confirmPassword": "Confirm Password is required", 
                "role": "Role is required", 
            })
        }
        else if(
            confirmPassword !== "" &&
            password !== "" 
        ){
            if(password !== confirmPassword){
                setError({
                    "email": "", 
                    "password": "", 
                    "confirmPassword": "Confirm password and password should be same", 
                    "role": "Role is required", 
                })
            }
        }
        else{
            
        }
    }

    return (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
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
                        {error.email} <br />
                    </span>
            }

            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Enter pasword" 
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
            />
            {
                Object.values(error).length > 0 &&
                    <span>
                        {error.password}  <br />
                    </span>
            }

            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Enter confirm pasword" 
                onChange={(e)=>{
                    setConfirmPassword(e.target.value)
                }}
            />
            {
                Object.values(error).length > 0 &&
                    <span>
                        {error.confirmPassword}  <br />
                    </span>
            }

            <Form.Label>Image</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Image" 
                onChange={(e)=>{
                    setImage(e.target.value)
                }}
            />

            <Form.Select aria-label="Select Role" onClick={(e)=>{
                setRole(e.target.value)
            }}>
                <option>Choose</option>
                <option value="Admin">Admin</option>
                <option value="Client">Client</option>
            </Form.Select>

            {
                Object.values(error).length > 0 &&
                    <span>
                        {error.role}  <br />
                    </span> 
            }

            <Button 
                variant="primary" 
                onClick={()=>{
                    register()
                }}
            >
                Register
            </Button>
                
            </Form.Group>
        </Form>
      );
}

export default Login;