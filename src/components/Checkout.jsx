import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux'

const Checkout = () => {
       const state = useSelector((state) => state.addItem)

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">₹{item.price}</span>
            </li>
        );
     }

    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [address1, setaddress1] = useState('');
    const [address2, setaddress2] = useState('');
    const [isChecked, setIsChecked] = useState('Picture1');
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            fullname: fullname,
            phone: phone,
            address1: address1,
            address2: address2,
            email: email,
            pro:isChecked,
            Picturecost: total
        }
        console.log(data);
        try {
            const response = await axios.post('http://localhost:3001/checkout', data);
            console.log(data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const showAlert = () => {
        window.alert('Picture Added');
    };
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
      };
      const handleCheckboxChange1 = (event) => {
        setIsChecked1(event.target.checked);
      };
      const handleCheckboxChange2 = (event) => {
        setIsChecked2(event.target.checked);
      };
      const handleCheckboxChange3 = (event) => {
        setIsChecked3(event.target.checked);
      };
      const handleCheckboxChange4 = (event) => {
        setIsChecked4(event.target.checked);
      };
    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}
                                <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>₹{total}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3"><u>Billing address</u></h4>
                        <form className="needs-validation" onSubmit={handleSubmit} method='post' novalidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">Full name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="Your Name Here" name='fullname' value={fullname} onChange={(e) => setfullname(e.target.value)} required />
                                        </div>
                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Email</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="email" className="form-control" id="email" placeholder="Email" name='email' value={email} onChange={(e) => setemail(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Phone</label>
                                    <input type="number" className="form-control" id="number" placeholder="Number" name='phone' value={phone} onChange={(e) => setphone(e.target.value)} required />

                                </div>
                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Address Line 1 </label>
                                    <input type="text" className="form-control" id="address1" placeholder="Home/Street Name, Number" name='address1' value={address1} onChange={(e) => setaddress1(e.target.value)} required />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Address Line 2 </label>
                                    <input type="text" className="form-control" id="address2" placeholder="City" name='address2' value={address2} onChange={(e) => setaddress2(e.target.value)} required />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Select Pictures</label>
                                    <div className="input-group has-validation">
                                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />ORGANIC PRO 750<br/>
                                    </div>
                                    <hr />
                                    <div className="input-group has-validation">
                                        <input type="checkbox" checked={isChecked1} onChange={handleCheckboxChange1} />PEARLD MILLESTS 950<br/>
                                    </div>
                                    <hr />
                                    <div className="input-group has-validation">
                                        <input type="checkbox" checked={isChecked2} onChange={handleCheckboxChange2} />MIXED MILLETS 800<br/>
                                    </div>
                                    <hr />
                                    <div className="input-group has-validation">
                                        <input type="checkbox" checked={isChecked3} onChange={handleCheckboxChange3} />ORGANIC HULLED 1050<br/>
                                    </div>
                                    <hr />
                                    <div className="input-group has-validation">
                                        <input type="checkbox" checked={isChecked4} onChange={handleCheckboxChange4} />ORGANIC LITTLE 1150<br/>
                                    </div>
                                </div>   
                            </div>
                            <hr className="my-4" />
                               <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
