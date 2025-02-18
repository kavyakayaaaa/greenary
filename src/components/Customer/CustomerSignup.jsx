import React from 'react'
import './RegistrationPage.css';
import { useState } from 'react';
import axios from 'axios';

function CustomerSignup() {
    const [fullname, setfullname] = useState('');
    const [phone, setphone] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    const [address, setaddress] = useState('');
    const [city, setcity] = useState('');

    const handleSubmit=async(e)=>{
      e.preventDefault();
      const data = {
        fullname: fullname,
        email:email,
        password:password,
        address:address,
        city:city,
        phone:phone
        
  
      }
      console.log(data);
      try {
        const response = await axios.post('http://localhost:3001/farmersignup', data);
        console.log(data);
        console.log(response);
       
      } catch (error) {
        console.log(error);
  
  
      }
    }
  
    const showAlert = () => {
      window.alert('Registration Successfull. Please Login');
    };
    
    
  return (
    
   
    <div className="registration-container">
    <h1>Customer Registration</h1>
    <form className="registration-form" onSubmit={handleSubmit}  method='post'>
      <div className="form-group">
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name='fullname' value={fullname} onChange={(e) => setfullname(e.target.value)} required/>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone    No:</label>
        <input type="tel" id="phone" name='phone' value={phone} onChange={(e) => setphone(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Mail Address:</label>
        <input type="email" id="email" name='email' value={email} onChange={(e) => setemail(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name='password' value={password} onChange={(e) => setpassword(e.target.value)} required/>
      </div>
     
      <div className="form-group">
        <label htmlFor="address">Home Address:</label>
        <input type="text" id="address" name='address' value={address} onChange={(e) => setaddress(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <select id="city" name='city' value={city} onChange={(e) => setcity(e.target.value)} required>
          <option value="">Select a city</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Shivamogga">Shivamogga</option>
          <option value="Hassan">Hassan</option>
          <option value="Mysore">Mysore</option>
        </select>
      </div>
      
      <button type="submit" className="register-button" onClick={showAlert}>Register</button>
    </form>
  </div>
        
  )
}

export default CustomerSignup