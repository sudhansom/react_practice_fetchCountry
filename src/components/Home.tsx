import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { insertCountry, removeCountry } from "./redux/action";

import allCountries from "../components/customHooks/allCountries";
import { Country } from "./redux/types";
import DataTable from "./DataTable";
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
  const [err, countries] = allCountries();
  console.log("countries::", countries);
  const dispatch = useDispatch();
  const addToCart = (country: Country) => {
    dispatch(insertCountry(country));
  };

  // const COLUMNS = ["name", "captal", "area"];
  // const columns = COLUMNS.map((col) => {
  //   return {
  //     label: col,
  //     renderContent: (country: Country) => {
  //       return <p>{country.col}</p>;
  //     },
  //   };
  // });

  const columns = [
    {
      label: "Flag",
      renderContent: (country: Country) => {
        return <img src={country.flag} height="30em"></img>;
      },
    },
    {
      label: "name",
      renderContent: (country: Country) => {
        return <Link to={`/detail/${country.name}`}>{country.name}</Link>;
      },
    },
    {
      label: "capital",
      renderContent: (country: Country) => {
        return <p>{country.capital}</p>;
      },
    },
    {
      label: "area",
      renderContent: (country: Country) => {
        return <p>{country.area}</p>;
      },
    },
    {
      label: "Action",
      renderContent: (country: Country) => {
        return (
          <Button
            onClick={() => {
              addToCart(country);
            }}
            variant="contained"
            color="primary"
            className="submit-btn"
          >
            LIKE
          </Button>
        );
      },
    },
  ];

  if (countries.length) {
    return <DataTable<Country> items={countries} column={columns}></DataTable>;
  } else {
    return <p>fetching</p>;
  }
  //   if (countries.length) {
  //     return (
  //       <TableContainer>
  //         <Table>
  //           <TableHead>
  //             <TableRow>
  //               <TableCell>Flag</TableCell>
  //               <TableCell>Name</TableCell>
  //               <TableCell>Capital</TableCell>
  //               <TableCell>Area</TableCell>
  //               <TableCell>Action</TableCell>
  //             </TableRow>
  //           </TableHead>
  //           <TableBody>
  //             {countries.map((country: Country) => {
  //               return (
  //                 <TableRow>
  //                   <TableCell>
  //                     <img src={country.flag} height="30em"></img>
  //                   </TableCell>
  //                   <TableCell>
  //                     <Link to={`/detail/${country.name}`}>{country.name}</Link>
  //                   </TableCell>
  //                   <TableCell>{country.capital}</TableCell>
  //                   <TableCell>{country.area}</TableCell>
  //                   <TableCell>
  //                     <Button
  //                       variant="contained"
  //                       color="primary"
  //                       onClick={() => {
  //                         addToCart(country);
  //                       }}
  //                     >
  //                       Add
  //                     </Button>
  //                   </TableCell>
  //                 </TableRow>
  //               );
  //             })}
  //           </TableBody>
  //         </Table>
  //       </TableContainer>
  //     );
  //   } else {
  //     return <p>fetching....</p>;
  //   }
  // }

  //<button onClick={handleCart}>Add Country</button>
  //<Link to={`/cart/${country.name}`}>{country.name}</Link>
}
export default Home;
