import React, { useState,useEffect } from 'react'
import axios from 'axios';
import '../../App.css';

function Products() {
    const [products, setPictures] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPictures(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
    

    return (
        <div className="container">
        {/* <h1>Products</h1> */}
        <table className="table">
          <thead>
            <tr>
            <th>Picture ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Total Cost</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((person) => (
              <tr key={person.password}>
                <td>{person.pid}</td>
                <td>{person.pname}</td>
                <td>{person.qty}</td>
                <td>{person.ttc}</td>
                <td>{person.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }


    


export default Products