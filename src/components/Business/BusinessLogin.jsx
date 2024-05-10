import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Businesslogin.css'
import { useState } from 'react';

function BusinessLogin() {
  const navigate = useNavigate();
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      console.log(password);
      const response = await fetch('http://localhost:3001/businessmanlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login successful, redirect to the dashboard
        navigate.push('/bdashboard');
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

  return (
    <div className='new'><div class="login-page">
    <div class="form">
      <div class="login">
        <div class="login-header">
          <h3>BUSINESSMAN LOGIN</h3>
          </div>
      </div>
      <form class="login-form"  onSubmit={handleSubmit}  method='post'>
        <input type="email" placeholder="e-mail" name='email' value={email} onChange={(e) => setemail(e.target.value)} required />
        <input type="password" placeholder="password"  name='password' value={password} onChange={(e) => setpassword(e.target.value)} required/>
        <button onClick={(e) => {e.preventDefault(); navigate('/products');}}>Login</button>
      {error && <p>{error}</p>}
        </form>      
    </div>
  </div></div>
  )
}

export default BusinessLogin
