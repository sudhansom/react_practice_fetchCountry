import React from "react";
import { useParams } from "react-router-dom";
import useFetchCountry from "./customHooks/fetchOneCountry";

function DetailPage() {
  const { countryName } = useParams();
  const [err, country] = useFetchCountry(countryName);
  console.log("oneCountry", country);

  if (country) {
    return <p>fetched...</p>;
  } else {
    return <p>comming up soon...</p>;
  }
}

export default DetailPage;
