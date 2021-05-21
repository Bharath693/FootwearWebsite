
import addidas from '../Assests/addidas.jpg'
import bentlee from '../Assests/Bentlee.jpg'
import Leecooper from '../Assests/Leecooper.jpg'
import nike from '../Assests/Nike.jpg'
import puma from '../Assests/puma.jpg'
import sparx from '../Assests/sparx.jpg'


const initialisestate={
    products:[
    {id:1 , ProductName:"Addidas" , Productprice:400 ,image:addidas},
    {id:2 , ProductName:"bentlee" , Productprice:600 ,image:bentlee},
    {id:3 , ProductName:"Leecooper" , Productprice:500 ,image:Leecooper},
    {id:4 , ProductName:"Nike" , Productprice:700 ,image:nike},
    {id:5 , ProductName:"Puma" , Productprice:300 ,image:puma},
    {id:6 , ProductName:"Sparx" , Productprice:450 ,image:sparx},
    ]
}

export function ProductsReducer(state=initialisestate , action){
switch(action.type){
    default:
        return state
}
}

