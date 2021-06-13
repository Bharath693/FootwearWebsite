import React from "react";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function Navbar({Count}) {
  const {shoppingCart , qty} = Count;
  // console.log(shoppingCart)
  // console.log(typeof(qty))
  
  return (
    <nav className="navContainer">
      <div className="right">
        <h1>
          <Link to ="/">Venkateshwara</Link>
        </h1>
      </div>
      <ul className="left">
        <li>
         <Link to ="/cart"><span className="dollar"><FontAwesomeIcon icon={faCartPlus}/></span>
         <span className="shoppingCartTotal">{qty}</span>
         </Link>
        </li>
      </ul>
    </nav>
  );
}

const mapStateToProps = (state) =>{
  return {Count:state.Cart}
}
export default connect(mapStateToProps)(Navbar)
