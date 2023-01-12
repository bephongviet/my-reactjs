import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import SimpleLayout from '../layouts/SimpleLayout';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const config = {
            headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
        };

        axios.post('http://localhost:5051/api/user/login', {
            email: email,
            password: password
        }, config)
        .then(response => {
            setMessage("You're logged in");
            navigate('/home');
        })
        .catch(error => {
            console.log(error);
            setErrorMessage("Login failed");
        });
    };

    return (
        <SimpleLayout>
        <form onSubmit={handleSubmit}>
            <h3>Please login.</h3>
            {message && <p className="text-success">{message}</p>}
            {errorMessage && <p className="text-error">{errorMessage}</p>}        
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" 
                  id="email" aria-describedby="emailHelp" 
                  value={email} onChange={(event) => setEmail(event.target.value)}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" 
                id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className='form-group' style={{marginTop: '2vh'}}>
                <button type="submit" className="btn btn-primary">Submit</button>
                &nbsp;<a href="/">Back to Home</a>
            </div>
        </form>
        </SimpleLayout>
    );
};

export default Login;