import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../redux/reducers";

import { getOneCountry } from "../redux/thunk";

const useFetchCountry = (countryName: string | undefined) => {
  const dispatch = useDispatch();
  const country = useSelector((state: Store) => state.countryReducer.country);
  const err = useSelector((state: Store) => state.countryReducer.err);

  useEffect(() => {
    dispatch(getOneCountry(countryName));
  }, [countryName, dispatch]);

  return [err, country];
};
export default useFetchCountry;
