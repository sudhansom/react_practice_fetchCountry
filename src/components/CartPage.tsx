import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React from "react";
import { removeCountry } from "./redux/action";

function CartPage() {
  const dispatch = useDispatch();
  let { countryName } = useParams();
  console.log("name", countryName);
  const handleRemove = () => {
    dispatch(removeCountry(countryName));
  };
  return (
    <div>
      <h1>Cart Page</h1>
      <button onClick={handleRemove}>Remove Country</button>
    </div>
  );
}

export default CartPage;
