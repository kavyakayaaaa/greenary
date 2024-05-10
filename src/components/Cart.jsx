import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {delItem} from '../redux/actions/index'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Cart = () => {
    const state = useSelector((state)=> state.addItem)
    const dispatch = useDispatch()

    const handleClose = (item) => {
         dispatch(delItem(item)) //remove only leftside what you reture.
    }

    const cartItems = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                
                <div className="container py-4">
                    
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="col-md-4">
                            <h3 style={{ color: '#000',textDecoration: 'none' }}>{cartItem.title}</h3>
                            <p className="lead fw-bold">₹{cartItem.price}</p>
                        </div>
                    <div className="row justify-content-center">
                    
                        <div className="col-md-4">
                            <img style={{ width: 250, height: 250 }}src={cartItem.img} alt={cartItem.title} />
                        
                        </div>
                       
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    {/* <NavLink to="/checkout" style={{ width: 700, height: 50 }}className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed</NavLink> */}
                    <button type="submit"><Link to='/checkout'>Proceed to Checkout</Link></button>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart
