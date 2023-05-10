import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from 'react';
import credientials from '../../Lib/userCredentials';
import { useNavigate, Link } from 'react-router-dom';

function Login (){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState({});

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("user"));

        if(data !== null){
          navigate("/home");
        }
        else{
          navigate("/");
        }
    },[]);

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
            // if(
            //     credientials.email !== email &&
            //     credientials.password !== password 
            // ){
            //     setError({
            //         "email": "Email is invalid", 
            //         "password": "Password is invalid", 
            //      })
            // }
            // else if(
            //     credientials.email === email &&
            //     credientials.password !== password 
            // ){
            //     setError({
            //         "email": "", 
            //         "password": "Password is invalid", 
            //      })
            // }
            // else if(
            //     credientials.email !== email &&
            //     credientials.password === password 
            // ){
            //     setError({
            //         "email": "Email is invalid", 
            //         "password": "", 
            //      })
            // }
            // else{
                setError({});

                let user =  localStorage.getItem("user_list");
                
                if(user !== null){
                    user = JSON.parse(user);

                    let search = user.filter((tmp)=>{
                        return tmp.email === email &&  tmp.password === password && tmp.role === role
                    });

                    if(search.length > 0){
                        localStorage.setItem("user", JSON.stringify(
                            {
                                email: email,
                                password: password,
                                role: role,
                                image: search[0].image,
                            }
                        ));
                        navigate('home');
                    }
                    else{
                        alert("Invalid crendirentials")
                    }

                }
                else{
                    alert("user not registered");
                }
           // }
        }
    }

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

            <Form.Select aria-label="Select Role" onClick={(e)=>{
                setRole(e.target.value)
            }}>
                <option>Choose</option>
                <option value="Admin">Admin</option>
                <option value="Client">Client</option>
            </Form.Select>
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

            <Link to={"/register"}>
                Register
            </Link>
        </Form>
      );
}

export default Login;