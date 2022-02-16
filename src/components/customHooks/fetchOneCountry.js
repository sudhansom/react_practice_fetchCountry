import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchCountry = (url) => {
  const [country, setCountry] = useState([]);
  const [err, setError] = useState([]);

  useEffect(() => {
    try {
      const getCountry = async (url) => {
        const data = await axios.get(url);
        setCountry(data.data);
      };
      getCountry(url);
    } catch (err) {
      setError(err);
    }
  }, [url]);

  return [err, country];
};
export default useFetchCountry;
