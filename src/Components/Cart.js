import React from "react";
import {connect} from 'react-redux'
import './Cart.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from 'react-redux'
function Cart({CartItems}) {
   const dispatch = useDispatch()
   let {shoppingCart , totalprice,qty} = CartItems;
   
  return(
    <div className="cartContainer">
      {shoppingCart && shoppingCart.length > 0 ? shoppingCart.map((item , index) =>{
        return(
          <div id={index} className="cartDetails">
            <span className="image">{<img src={item.image} />}</span>
            {/* <span>{qty}</span> */}
            <span className="productname">{item.ProductName}</span>
            <span>Rs {item.Productprice}.00</span>
            <span className="icon" onClick={()=>dispatch({type:"INC", id:item.id , item})}>{<FontAwesomeIcon icon={faPlus} />}</span>
            <span>{item.qty}</span>
            <span className="icon Dec" onClick={() =>dispatch({type:"DEC" , id:item.id , item})}>{<FontAwesomeIcon icon={faMinus}/>}</span>
            <span>{item.qty * item.Productprice}</span>
            <span className="trash" onClick={() =>dispatch({type:"DELETE_PRODUCT" , id:item.id , item})}>{<FontAwesomeIcon icon={faTrash}/>}</span>
          </div>
        )
      }):'Sorry your cart is currently empty!'}
    </div>
  )
}
const mapStateToProps = (state) =>{
  return{CartItems :state.Cart}
}

export default connect(mapStateToProps)(Cart)
