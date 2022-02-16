import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { removeCountry } from "./redux/action";

function CartPage() {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeCountry("Nepal"));
  };
  return (
    <div>
      <h1>Cart Page</h1>
      <button onClick={handleRemove}>Remove Country</button>
    </div>
  );
}

export default CartPage;
