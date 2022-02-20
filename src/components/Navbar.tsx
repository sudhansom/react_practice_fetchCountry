import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cart from "../images/cart.png";
import { Badge } from "@material-ui/core";
import { Store } from "./redux/reducers";
import { Dialog, DialogTitle, Button } from "@material-ui/core";
import DataTable from "./DataTable";
import { Country } from "./redux/types";
import { removeCountry } from "./redux/action";

function Navbar() {
  const dispatch = useDispatch();
  const total = useSelector((state: Store) => {
    return state.countryReducer.cart.length;
  });
  const cartContent = useSelector((state: Store) => {
    return state.countryReducer.cart;
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleRemoveCountry = (countryName: string) => {
    dispatch(removeCountry(countryName));
  };
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
        return <p>{country.name}</p>;
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
      label: "remove",
      renderContent: (country: Country) => {
        return (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              handleRemoveCountry(country.name);
            }}
          >
            Remove
          </Button>
        );
      },
    },
  ];

  return (
    <div className="navbar">
      <ul>
        <div>
          <li>Logo</li>
        </div>
        <div>
          <li>Search</li>
        </div>
        <div className="cart-section">
          <Badge badgeContent={total} className="badge-section">
            <a onClick={handleOpen}>
              <img src={cart} height="30em" alt="no image" />
            </a>
          </Badge>
        </div>
      </ul>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Facourite items</DialogTitle>
        <DataTable<Country> items={cartContent} column={columns}></DataTable>;
      </Dialog>
    </div>
  );
}

export default Navbar;
