import React, { Component } from 'react';
import SimpleLayout from '../layouts/SimpleLayout';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom'

const navigate = useNavigate();

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      message: '',
      errorMessage: ''
    };
  }

  handleSubmit = (event) => {
    const config = {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
    event.preventDefault();
    axios.post('http://localhost:5051/api/user/login', {
      email: this.state.email,
      password: this.state.password
    }, config)
      .then(response => {
        this.setState({ message: "You're logged in" });
        return navigate('/home');
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMessage: "Login failed" });
      });
  }

  render() {
    return (
      <SimpleLayout>
        <form onSubmit={this.handleSubmit}>
            <h3>Please login.</h3>
            {this.state.message && <p className="text-success">{this.state.message}</p>}
            {this.state.errorMessage && <p className="text-error">{this.state.errorMessage}</p>}        
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" 
                  id="email" aria-describedby="emailHelp" 
                  value={this.state.email} onChange={(event) => this.setState({email: event.target.value})}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" 
                id="password" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})}/>
            </div>
            <div className='form-group' style={{marginTop: '2vh'}}>
                <button type="submit" className="btn btn-primary">Submit</button>
                &nbsp;<a href="/">Back to Home</a>
            </div>
        </form>
      </SimpleLayout>
    );
  }
}

export default Login;
