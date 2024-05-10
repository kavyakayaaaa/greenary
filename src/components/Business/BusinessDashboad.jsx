import React from 'react'
import './BusinessDashboad.css';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';


function BusinessmanDashboard() {
  const navigate= useNavigate();
  return (
    <div>
    <Helmet>
    <title>Businessman Dashboard</title>
  </Helmet>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <div class="container">
  <div class="card" onclick="showMessage()">
    <img src="https://th.bing.com/th/id/OIP.fxw-yjm-erjj7Bo2O18RYAAAAA?pid=ImgDet&w=300&h=300&rs=1" alt="Purchase Product"/>
    <center><h2 style={{ color: '#000',textDecoration: 'none' }}
    onClick={(e) => {e.preventDefault(); navigate('/purchaseproducts');}}>Purchase Products</h2></center>
    {/* <p>$10.00</p> */}
    <br/>
  </div>
  <div class="card" onclick="showMessage()">
    <img src="https://tse4.mm.bing.net/th?id=OIP.-ENfDJtBbGh15PbBAXS_TQHaHa&pid=Api&P=0" alt="Purchased Products" />
    <center><h2 style={{ color: '#000',textDecoration: 'none' }}
    onClick={(e) => {e.preventDefault(); navigate('/listproducts');}}>Products</h2></center>
    
    <br/>
  </div>
  <div class="card" onclick="showMessage()">
    <img src="https://tse3.mm.bing.net/th?id=OIP.n23jEKO2wJOTpylRM8EOmgHaHa&pid=Api&P=0" alt="Convertions" />
    <center><h2 style={{ color: '#000',textDecoration: 'none' }}
    onClick={(e) => {e.preventDefault(); navigate('/convertions');}}>Convertions</h2></center>
    
    <br/>
    
  </div>
  <div class="card" onclick="showMessage()">
    <img src="https://tse3.mm.bing.net/th?id=OIP.c-U9STnZ0Cd7FL2A0qPKkQHaHC&pid=Api&P=0" alt="Inventory" />
    <center><h2 style={{ color: '#000',textDecoration: 'none' }}
    onClick={(e) => {e.preventDefault(); navigate('/inventory');}}>Inventory</h2></center>
    
    <br/>
    
  </div>
  
</div>

  

  
  
  </div>

  )
}

export default BusinessmanDashboard