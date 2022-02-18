import { Dispatch } from "redux";

import { oneCountrySuccess, onFetchFail, allCountriesSuccess } from "./action";

export const getOneCountry = (countryName: string | undefined) => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const result = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await result.json();
      dispatch(oneCountrySuccess(data[0]));
    } catch (err) {
      dispatch(onFetchFail(err));
    }
  };
};

export const getAllCountries = () => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const result = await fetch("https://restcountries.com/v2/all");
      const countryList = await result.json();
      console.log("inside thunk Countries:", countryList);
      dispatch(allCountriesSuccess(countryList));
    } catch (err) {
      dispatch(onFetchFail(err));
    }
  };
};
