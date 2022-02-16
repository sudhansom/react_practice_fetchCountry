import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { insertCountry, removeCountry } from "./redux/action";

import allCountries from "../components/customHooks/allCountries";
import {
  TableHead,
  TableBody,
  TableCell,
  Table,
  TableRow,
  TableContainer,
  Button,
} from "@material-ui/core";

function Home() {
  const [err, countries] = allCountries("https://restcountries.com/v2/all");
  console.log("countries::", countries);
  const dispatch = useDispatch();
  const addToCart = (country) => {
    dispatch(insertCountry(country));
  };
  if (countries.length) {
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Capital</TableCell>
              <TableCell>Area</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries.map((country) => {
              return (
                <TableRow>
                  <TableCell>
                    <img src={country.flag} height="30em"></img>
                  </TableCell>
                  <TableCell>
                    <Link to={`/detail/${country.name}`}>{country.name}</Link>
                  </TableCell>
                  <TableCell>{country.capital}</TableCell>
                  <TableCell>{country.area}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        addToCart(country);
                      }}
                    >
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return <p>fetching....</p>;
  }
}

export default Home;

//<button onClick={handleCart}>Add Country</button>
//<Link to={`/cart/${country.name}`}>{country.name}</Link>
