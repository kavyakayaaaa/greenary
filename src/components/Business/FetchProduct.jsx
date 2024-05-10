import React, { useState } from 'react';
//import './App.css';

function FetchProduct() {
  const [pid, setpid] = useState('');
  const [product, setPicture] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setpid(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/fetchproduct/${pid}`)
      .then((res) => {
        if (res.status === 404) {
          throw new Error('Product not found');
        } else if (!res.ok) {
          throw new Error('Error retrieving product information');
        }
        return res.json();
      })
      .then((data) => {
        setPicture(data);
        console.log(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setPicture(null);
      });
    };

  return (
    <div className="App">
      <h1>Picture Information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Picture ID:
          <input type="number" value={pid} onChange={handleInputChange} />
        </label>
        <button type="submit">Get Picture Information</button>
      </form>
      {error && <p>{error}</p>}
      <div className="container">
        {/* <h1>Products</h1> */}
        <table className="table">
          <thead>
            <tr>
            <th>Picture ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Cost/Unit</th>
              <th>Total Cost</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {product.map((person) => (
              <tr key={person.password}>
                <td>{person.pid}</td>
                <td>{person.pname}</td>
                <td>{person.qty}</td>
                <td>{person.ppu}</td>
                <td>{person.ttc}</td>
                <td>{person.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FetchProduct;
