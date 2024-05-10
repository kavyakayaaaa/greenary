import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }
        try {
            console.log(password);
            const response = await fetch('http://localhost:3001/customerlogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),

            });

            if (response.ok) {
                navigate('/products');
            }else {
                // Handle non-successful login response (e.g., display error message)
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    }

    return (
        <>
            <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
                <span className="fa fa-sign-in me-1"></span> Login
            </button>

            {/* Modal */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"> Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4" style={{ color: '#FFF', textDecoration: 'none' }} data-bs-toggle="modal" data-bs-target="#loginModal" onClick={(e) => {e.preventDefault(); navigate('/farmerlogin');}}>
                                Customer Login
                            </button>
                            <button className="btn btn-primary w-100 mb-4" style={{ color: '#FFF', textDecoration: 'none' }} data-bs-toggle="modal" data-bs-target="#loginModal" onClick={(e) => {e.preventDefault(); navigate('/deliverylogin');}}>
                                Delivery Login
                            </button>
                            <button className="btn btn-primary w-100 mb-4" style={{ color: '#FFF', textDecoration: 'none' }} data-bs-toggle="modal" data-bs-target="#loginModal" onClick={(e) => {e.preventDefault(); navigate('/businesslogin');}}>
                                Business Login
                            </button>
                            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-outline-primary w-100 mt-5" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
        </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;

