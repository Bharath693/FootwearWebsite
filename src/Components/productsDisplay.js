import React from 'react'
import { connect } from 'react-redux'
import { useSelector , useDispatch } from 'react-redux'
import Carousal from '../Carousel/Carousal'
import './productDisplay.css'

function ProductsDisplay({ProductItems}){
  // console.log(ProductItems)
  const dispatch = useDispatch()
    return(
        <>
          <Carousal />
          <div className="productMainContainer">
            {ProductItems && ProductItems.map((product ,index) =>{
            //  console.log(product)
              return(
                <>
                <div className="container" id={index}>
                  <div className="imagediv">{<img src={product.image} />}</div>
                <div className="productdetails">
                <div>
                  <h2>{product.ProductName}</h2>
                </div>
                <div className>
                  <h4>Rs {product.Productprice}.00</h4>
                </div>
              </div>
              <div className="btn">
                <button onClick = {() =>dispatch({type: "ADD_TO_CART" , id:product.id , ProductItems})}>Add to cart</button>
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
   return {ProductItems : state.ProductsR}
   
}
export default connect(mapStateToProps)(ProductsDisplay)
