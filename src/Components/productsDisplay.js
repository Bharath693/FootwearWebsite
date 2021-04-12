import React from 'react'
import './productDisplay.css'

function productsDisplay(props){
    const { productname , productprice , image} = props
    
    return(
        <div className="productmaindiv">
               <div className="imagediv">
                   {<img src={image} />}
              </div>
              <div className="productdetails">
                 <div>
                    <h2>{productname}</h2>
                 </div>
                <div className>
                   <h4>{productprice}</h4>
                </div>
              </div>
              <div className="btn">
                <button>Add to cart</button>
              </div>
       </div>
      
    )
}
export default productsDisplay;