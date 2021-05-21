import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function navbar() {
  return (
    <div className="navContainer">
      <div className="right">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Venkateshwara</h1>
        </Link>
      </div>
      <ul className="left">
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <li>
            {" "}
            Cart
            <div className="ShoppingCart">
              <FontAwesomeIcon icon={faCartPlus} />
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}
export default navbar;
