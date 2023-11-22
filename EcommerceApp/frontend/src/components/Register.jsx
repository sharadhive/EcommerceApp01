import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const containerStyle = {
  background: 'linear-gradient(to right bottom, #ffcc80, #ffa726)',
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
  color: '#ffcc80',
};

const inputStyle = {
  padding: '8px',
  marginBottom: '16px',
  border: '1px solid #ffcc80',
  borderRadius: '4px',
  width: '100%',
  boxSizing: 'border-box',
};

const selectStyle = {
  ...inputStyle,
  appearance: 'none',
};

const buttonStyle = {
  backgroundColor: '#ffcc80',
  color: '#fff',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  width: '100%',
};

const buttonHoverStyle = {
  backgroundColor: '#ffa726',
};

const RegisterForm = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'male',
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword, gender } = state;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register', {
        email,
        password,
        gender,
      });
      alert(response.data.message);

      navigate('/login'); // Redirect to the login page
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={headingStyle}>Register</h2>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <label>Gender:</label>
        <select
          name="gender"
          value={state.gender}
          onChange={handleChange}
          style={selectStyle}
          required
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <button type="submit" style={{ ...buttonStyle, ...buttonHoverStyle }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
