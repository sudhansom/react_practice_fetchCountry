import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getOneCountry } from "../redux/action";

const useFetchCountry = (countryName) => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countryReducer.country);
  const err = useSelector((state) => state.countryReducer.err);

  useEffect(() => {
    dispatch(getOneCountry(countryName));
  }, [dispatch]);

  return [err, country];
};
export default useFetchCountry;
