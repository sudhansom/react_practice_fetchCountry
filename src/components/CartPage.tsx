import React, { useState } from "react";
import { Dialog, DialogTitle, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "./redux/reducers";
import { Country } from "./redux/types";
import DataTable from "./DataTable";

function CartPage() {
  const dispatch = useDispatch();
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
        return <Button>Remove</Button>;
      },
    },
  ];

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Facourite items</DialogTitle>
      <DataTable<Country> items={cartContent} column={columns}></DataTable>;
    </Dialog>
  );
}

export default CartPage;
