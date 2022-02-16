import React from "react";
import { useParams } from "react-router-dom";
import useFetchCountry from "./customHooks/fetchOneCountry";

function DetailPage() {
  const { countryName } = useParams();
  const [err, country] = useFetchCountry(
    `https://restcountries.com/v3.1/name/${countryName}`
  );
  console.log("oneCountry", country);

  return <p>comming up soon....</p>;
}

export default DetailPage;
