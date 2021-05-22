import React from 'react'
import {connect} from 'react-redux'
import { useDispatch } from 'react-redux'
import './productDisplay.css'

function ProductsDisplay(props){
   const {Products} = props
   const dispatch = useDispatch()
    return(
        <>
        <div className="productMainContainer">
        {Products && Products.map((product) =>{
         const { id, ProductName, Productprice, image } = product
           return(
            <>
            <div key={id} className="container">
              <div className="imagediv">{<img src={image} />}</div>
              <div className="productdetails">
                <div>
                  <h2>{ProductName}</h2>
                </div>
                <div className>
                  <h4>{Productprice}</h4>
                </div>
              </div>
              <div className="btn" onClick={() =>dispatch({type: "ADD_TO_CART" ,id:product.id , Products})}>
                <button>Add to cart</button>
              </div>
            </div>
          </>
           )
        })}
        </div>
        </>
    )
}

const mapStateToProps = (state) =>{
   return {Products : state.Products}
}
export default connect(mapStateToProps)(ProductsDisplay)