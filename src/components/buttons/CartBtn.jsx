import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
  const state = useSelector((state)=> state.addItem)
    return (
        <>
            <NavLink to="/ci" className="btn btn-outline-primary ms-2">
                {/* <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length}) */}
                
                <span className=""></span> Pictures
            </NavLink>
            <NavLink to="/orders" className="btn btn-outline-primary ms-2">
                {/* <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length}) */}
                
                <span className="fa fa-shopping-cart me-1"></span> Orders
            </NavLink>
        </>
    )
}

export default CartBtn



