import React from 'react'
import { useSelector } from 'react-redux'
import './productDisplay.css'

function ProductsDisplay(){
   
   const products = useSelector((store) =>store)
   console.log(products)
    return(
        <div className="productmaindiv">
               <div className="imagediv">
                   {/* {<img src={image} />} */}
              </div>
              <div className="productdetails">
                 <div>
                    {/* <h2>{productname}</h2> */}
                 </div>
                <div className>
                   {/* <h4>{productprice}</h4> */}
                </div>
              </div>
              <div className="btn">
                <button >Add to cart</button>
              </div>
       </div>
      
    )
}
export default ProductsDisplay;