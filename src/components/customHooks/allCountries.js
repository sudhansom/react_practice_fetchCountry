import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchCountries = (url) => {
  const [countries, setCountries] = useState([]);
  const [err, setError] = useState([]);

  useEffect(() => {
    try {
      const getAllCountries = async (url) => {
        const data = await axios.get(url);
        const result = await data.json();
        setCountries(result);
      };
      getAllCountries(url);
    } catch (err) {
      setError(err);
    }
  }, [url]);

  return [err, countries];
};
export default useFetchCountries;
