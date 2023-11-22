import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

const containerStyle = {
  background: 'linear-gradient(to right bottom, #4CAF50, #45a049)',
  fontFamily: 'Arial, sans-serif',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  margin: 0,
};

const formStyle = {
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  width: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const headingStyle = {
  color: '#4CAF50',
};

const inputStyle = {
  padding: '8px',
  marginBottom: '16px',
  border: '1px solid #4CAF50',
  borderRadius: '4px',
  width: '100%',
  boxSizing: 'border-box',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: '#fff',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  width: '100%',
};

const buttonHoverStyle = {
  backgroundColor: '#45a049',
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  render() {
    return (
      <div style={containerStyle}>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <h2 style={headingStyle}>Login</h2>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            style={inputStyle}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            style={inputStyle}
            required
          />

          <button type="submit" style={{ ...buttonStyle, ...buttonHoverStyle }}>
            Login
          </button>

          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
