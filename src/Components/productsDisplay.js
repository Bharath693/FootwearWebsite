import React from 'react'
import './productDisplay.css'

function productsDisplay(props){
    const { productname , productprice , image} = props
    
    return(
        <div className="productmaindiv">
               <div className="imagediv">
                   {<img src={image} />}
              </div>
              <div className>
              <h2>{productname}</h2>
              </div>
              <div className>
                <h4>{productprice}</h4>
              </div>
       </div>

    )
}
export default productsDisplay;