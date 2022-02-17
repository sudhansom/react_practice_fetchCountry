import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import axios from "axios";

import { getAllCountries } from "../redux/action";

const useFetchCountries = () => {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.countries);
  const err = useSelector((state) => state.err);

  useEffect(() => {
    console.log("inside hook....");
    dispatch(getAllCountries());
  }, [dispatch]);

  return [err, countryList];
};
export default useFetchCountries;
