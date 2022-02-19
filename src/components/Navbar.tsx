import React from "react";
import { useSelector } from "react-redux";
import cart from "../images/cart.png";
import { Badge } from "@material-ui/core";
import { Store } from "./redux/reducers";

function Navbar() {
  const total = useSelector((state: Store) => {
    return state.countryReducer.cart.length;
  });
  return (
    <div className="navbar">
      <ul>
        <div>
          <li>Logo</li>
        </div>
        <div>
          <li>Search</li>
        </div>
        <div className="cart-section">
          <Badge badgeContent={total}>
            <a href="/">
              <img src={cart} height="30em" alt="no image" />
            </a>
          </Badge>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
