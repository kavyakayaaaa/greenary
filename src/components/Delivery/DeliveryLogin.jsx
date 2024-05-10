import React from 'react'
import './Deliverylogin.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function DeliveryLogin() {
  const navigate = useNavigate();
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const [error, setError] = useState('');

  

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }
    try {
      console.log(password);
      const response = await fetch('http://localhost:3001/deliverylogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        
      });

      if (response.ok) {
        // Login successful, redirect to the dashboard
        navigate.push('/ddashboard');
      } else {
        // Login failed, display error message
        const { message } = await response.json();
        setError(message);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login.');
    }

  }

  const showAlert = () => {
    window.alert('Registration Successfull. Please Login');
  };
  return (
    <div className='new'><div class="login-page">
    <div class="form">
      <div class="login">
        <div class="login-header">
          <h3 style={{ color: '#000',textDecoration: 'none' }}>DELIVERY LOGIN</h3>
          
        </div>
      </div>
      <form class="login-form" onSubmit={handleSubmit}  method='post'>
        <input type="email" placeholder="e-mail" name='email' value={email} onChange={(e) => setemail(e.target.value)} required />
        <input type="password" placeholder="password"  name='password' value={password} onChange={(e) => setpassword(e.target.value)} required/>
        <button><h3 style={{ color: '#000',textDecoration: 'none' }}
    onClick={(e) => {e.preventDefault(); navigate('/products');}}>Login </h3></button>
        <p class="message"><Link to="/delsingup">Register</Link></p>
        {error && <p>{error}</p>}
        
      </form>
      
    </div>
  </div></div>

  )
}

export default DeliveryLogin