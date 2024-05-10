import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        Welcome to our online picture selling and buying platform! We are dedicated to providing a seamless and enjoyable experience for both buyers and sellers of high-quality images.

                        Our mission is to connect talented photographers and artists with individuals and businesses looking for unique and captivating images. We strive to offer a diverse selection of photographs and artwork to cater to a wide range of tastes and preferences.


                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img style={{ width: 500, height: 500 }} src="https://i.pinimg.com/originals/43/db/46/43db4682a57bbddf864719d9403919eb.jpg"alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
