import React from 'react'
import '../Business/BusinessDashboad.css';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';

function DeliveryDashboard() {
  const navigate = useNavigate();
  return (
    <div>
    <Helmet>
    <title>DeliveryMan Dashboard</title>
  </Helmet>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <div class="container">
  <div class="card" onclick="showMessage()">
    <img src="https://tse3.mm.bing.net/th?id=OIP.llkcvAulBp_qTfYnqOWE6AHaHW&pid=Api&P=0" alt="Purchase Product"/>
    <center><h2 style={{ color: '#000',textDecoration: 'none' }}
    onClick={(e) => {e.preventDefault(); navigate('/borders');}}> Orders</h2></center>
    {/* <p>$10.00</p> */}
    <br/>
  </div>
  <div class="card" onclick="showMessage()">
    <img src="https://tse4.mm.bing.net/th?id=OIP.-ENfDJtBbGh15PbBAXS_TQHaHa&pid=Api&P=0" alt="Purchased Products" />
    <center><h2 style={{ color: '#000',textDecoration: 'none' }}
    onClick={(e) => {e.preventDefault(); navigate('/bmorders');}}>Manage Orders</h2></center>
    
    <br/>
  </div>
  <div class="card" onclick="showMessage()">
    <img src="https://tse3.mm.bing.net/th?id=OIP.bEcBVg6PfUSuWunquP91CQHaHa&pid=Api&P=0" alt="Convertions" />
    <center><h2 style={{ color: '#000',textDecoration: 'none' }}
    onClick={(e) => {e.preventDefault(); navigate('/bhorders');}}> Orders History</h2></center>
    
    <br/>
    
  </div>
 
  
</div>

  

  
  
  </div>
  )
}

export default DeliveryDashboard