import React from 'react'

const initialState={
    shoppingCart:[],
    totalPrice:0,
    qty:0,
    Message:''
}

export const cartReducer = (state=initialState , action) => {
    const {shoppingCart , totalPrice , qty} = state
    let product;
    let updatedPrice;
    let updatedqty
   switch(action.type){
       case "ADD_TO_CART":
           let check = shoppingCart.find((cart) =>cart.id ===action.id)
           if(check){
               return{shoppingCart:[...shoppingCart],totalPrice ,Message:"this product is already in the list"}
           }
           else{
               product = action.Products.find((product) =>product.id === action.id);
                // console.log(product)
               product['qty'] = 1;
               updatedqty=qty +1;
               return{shoppingCart :[product,...shoppingCart], totalPrice: totalPrice+product.Productprice, Message:  '', qty: updatedqty}
           }
          default:
              return state
   }
}
