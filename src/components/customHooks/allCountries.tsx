import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import axios from "axios";

import { getAllCountries } from "../redux/action";
import { Store } from "../redux/reducers";

const useFetchCountries = () => {
  const dispatch = useDispatch();
  const countryList = useSelector(
    (state: Store) => state.countryReducer.countries
  );
  const err = useSelector((state: Store) => state.countryReducer.err);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return [err, countryList];
};
export default useFetchCountries;
