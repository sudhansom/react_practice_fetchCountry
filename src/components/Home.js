import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertCountry, removeCountry } from "./redux/action";

function Home() {
  const country = { name: "Nepal", population: 30 };
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(insertCountry(country));
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleCart}>Add Country</button>
    </div>
  );
}

export default Home;
