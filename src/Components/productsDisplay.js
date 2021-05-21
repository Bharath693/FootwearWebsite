import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import "./productDisplay.css";

function ProductsDisplay(props) {
  const { Products } = props;
  const products = useSelector((store) => store);
  return (
    <>
      {Products &&
        Products.map((item) => {
          const { id, ProductName, Productprice, image } = item;
          return (
            <>
              <div key={id} className="productmaindiv">
                <div className="imagediv">{<img src={image} />}</div>
                <div className="productdetails">
                  <div>
                    <h2>{ProductName}</h2>
                  </div>
                  <div className>
                    <h4>{Productprice}</h4>
                  </div>
                </div>
                <div className="btn">
                  <button>Add to cart</button>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}

const mapStateToProps = (state) => {
  return { Products: state.Products };
};

export default connect(mapStateToProps)(ProductsDisplay);
