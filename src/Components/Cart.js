import React from 'react'
import { connect } from 'react-redux'
import  { useSelector } from 'react-redux'
function Cart(){
    const { totalPrice } = useSelector((store) => store.cart)
    console.log(totalPrice)
    return(
        <div>

        </div>
    )
}

export default Cart
