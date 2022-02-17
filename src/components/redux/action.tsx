import { Dispatch } from "redux";
import { Country } from "./types";

// insert country to cart if does not exist
export const insertCountry = (country: Country) => {
  return {
    type: "INSERT_COUNTRY",
    payload: country,
  };
};
// remove country from cart
export const removeCountry = (countryName: string | undefined) => {
  return {
    type: "REMOVE_COUNTRY",
    payload: countryName,
  };
};
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

const oneCountrySuccess = (country: Country) => {
  return {
    type: "SUCCESS_ONE_COUNTRY",
    payload: country,
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

const allCountriesSuccess = (countryList: Country[]) => {
  return {
    type: "SUCCESS_ALL_COUNTRIES",
    payload: countryList,
  };
};

const onFetchFail = (err: any) => {
  return {
    type: "FETCH_FAIL",
    payload: err,
  };
};

export const setLightTheme = () => {
  return {
    type: "LIGHT",
  };
};

export const setDarkTheme = () => {
  return {
    type: "DARK",
  };
};

type InsertCountry = {
  type: "INSERT_COUNTRY";
  payload: Country;
};

type RemoveCountry = {
  type: "REMOVE_COUNTRY";
  payload: string | undefined;
};

type OneCountrySuccess = {
  type: "SUCCESS_ONE_COUNTRY";
  payload: Country;
};
type AllCountriesSuccess = {
  type: "SUCCESS_ALL_COUNTRIES";
  payload: Country[];
};

type OnFetchFail = {
  type: "FETCH_FAIL";
  payload: any;
};

type SetDarkTheme = {
  type: "DARK";
};
type SetLightTheme = {
  type: "LIGHT";
};

export type AllActions =
  | InsertCountry
  | RemoveCountry
  | OneCountrySuccess
  | AllCountriesSuccess
  | OnFetchFail
  | SetDarkTheme
  | SetLightTheme;
