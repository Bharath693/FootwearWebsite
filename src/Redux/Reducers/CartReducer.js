import React from 'react'
import {useSelector} from 'react-redux'
var initialState={
    shoppingCart:[],
    totalprice:0,
    qty:0,
    message:''
}
export const CartReducer = (state=initialState , action) => {
    let {shoppingCart, totalprice, qty, message} = state
    // console.log(shoppingCart)
    let Product;
    let index
    let updatedPrice;
    let updatedqty
    switch(action.type){
        case"ADD_TO_CART":
     let check = shoppingCart.find((cart) =>cart.id === action.id)

     if(check){
         return{shoppingCart: [...shoppingCart], totalprice, message: 'This product is already in the cart!', qty}
     }
     else{
         Product = action.ProductItems.find((product) =>product.id === action.id)
         console.log(Product)
         Product['qty'] =1
         updatedqty = qty+1
         return{shoppingCart: [Product, ...shoppingCart], totalprice:totalprice+Product.Productprice, message:'',qty:updatedqty}
     }
     break;

     case "INC":
         Product = action.item
         Product.qty = Product.qty+1
         updatedqty = qty+1
        //  console.log(updatedqty)
        //  updatedPrice = totalprice+Product.price
        index = shoppingCart.findIndex(product =>product.id === action.id)
         shoppingCart[index] = Product
        //  console.log(shoppingCart[index])
         return{shoppingCart :[...shoppingCart] , totalprice:updatedPrice ,message:'', qty:updatedqty}
         break;
     
         case "DEC":
             Product = action.item
             if(Product.qty > 1){
                
             Product.qty = Product.qty - 1
             updatedPrice = totalprice - Product.price
             updatedqty = (qty - 1)
             index = shoppingCart.findIndex(cart =>cart.id === action.id)
             shoppingCart[index] = Product

             return{shoppingCart :[...shoppingCart] , totalprice:updatedPrice, message:"" , qty:updatedqty}
             }
             else{
                return state
             }
             break;

             case "DELETE_PRODUCT":
                 const filtered = shoppingCart.filter(item =>item.id !== action.id)
                 Product = shoppingCart.find(item =>item.id === action.id)
                 updatedPrice = totalprice - Product.Productprice * Product.qty
                 updatedqty = qty - Product.qty
                 return{shoppingCart :[...filtered] ,totalprice:updatedPrice , qty:updatedqty}
    //  case 'EMPTY':
    // return {shoppingCart:[], totalprice:0, message:'', qty:0}
    // break

    default:
    return state
    }
}
