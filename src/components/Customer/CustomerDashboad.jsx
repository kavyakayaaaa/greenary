import React from 'react'
import '../Business/BusinessDashboad.css';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';

function CustomerDashboard() {
  const navigate= useNavigate();
  return (
    <div>
    <Helmet>
    <title>Customer Dashboard</title>
  </Helmet>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <div class="container">
  <div class="card" onclick="showMessage()">
    <img src="https://th.bing.com/th/id/R.9a2eb66e7989552aef99af7b920983a8?rik=XYDj%2bnMuf%2fi2gQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_231353.png&ehk=IJd%2bGb8xRDHI9W9H7MDydJ5u%2fSwgXHt127kd5tLoooc%3d&risl=&pid=ImgRaw&r=0" alt="Purchase Product"/>
    <center><h2 style={{ color: '#000',textDecoration: 'none' }}
    onClick={(e) => {e.preventDefault(); navigate('/addproduct');}}>Add Products</h2></center>
    {/* <p>$10.00</p> */}
    <br/>
  </div>
  <div class="card" onclick="showMessage()">
    <img src="https://tse4.mm.bing.net/th?id=OIP.-ENfDJtBbGh15PbBAXS_TQHaHa&pid=Api&P=0" alt="Purchased Products" />
    <center><h2 style={{ color: '#000',textDecoration: 'none' }}
    onClick={(e) => {e.preventDefault(); navigate('/removeproduct');}}>Remove </h2></center>
    
    <br/>
  </div>
  <div class="card" onclick="showMessage()">
    <img src="https://tse3.mm.bing.net/th?id=OIP.bEcBVg6PfUSuWunquP91CQHaHa&pid=Api&P=0" alt="Convertions" />
    <center><h2 style={{ color: '#000',textDecoration: 'none' }}
    onClick={(e) => {e.preventDefault(); navigate('/listproducts');}}>List  Products </h2></center>
    
    <br/>
    
  </div>
 
  
</div>

  

  
  
  </div>
  )
}

export default CustomerDashboard