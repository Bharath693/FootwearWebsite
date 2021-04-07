import React from 'react'
import addidas from '../Assests/addidas.jpg'
import bentlee from '../Assests/Bentlee.jpg'
import Leecooper from '../Assests/Leecooper.jpg'
import nike from '../Assests/Nike.jpg'
import puma from '../Assests/puma.jpg'
import sparx from '../Assests/sparx.jpg'

const Products=[
    {id:1 , productName:"Addidas" , productPrice: 500 , image:addidas},
    {id:2 , productName:"Bentlee" , productPrice: 350 , image:bentlee},
    {id:3 , productName:"Leecooper" , productPrice: 300 , image:Leecooper},
    {id:4 , productName:"Nike" , productPrice: 700 , image:nike},
    {id:5 , productName:"Puma" , productPrice: 600 , image:puma},
    {id:6 , productName:"Sparx" , productPrice: 450 , image:sparx},
]

function productsReducer(state=Products , action){
switch(action.type){
    default:
        return [...state]
}
}
export default productsReducer;