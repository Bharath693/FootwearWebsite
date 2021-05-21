import React,{} from 'react'

const initialstate={
   products:[
       {}
    ]
}
let product;
let updatedPrice;
let updatedqty;

function CartReducer(state=initialstate,action){
    let {shoppingCart , totalprice , qty} = state
switch(action.type){
    case"ADD_TO_CART":
   let check=shoppingCart.find(cart=>cart.id ===action.id)
   if(check){
       return{shoppingCart:[...shoppingCart] , totalprice , message:'This product is already in cart' , qty}
   }else{
       product=action.pro
   }
}
}
export default CartReducer;